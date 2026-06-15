const pool = require('./db');

async function migrate() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS cars (
        id           SERIAL PRIMARY KEY,
        name         VARCHAR(120) NOT NULL,
        year         INTEGER,
        transmission VARCHAR(20),
        price        INTEGER,
        class        VARCHAR(20),
        img          VARCHAR(255),
        available    BOOLEAN DEFAULT true,
        created_at   TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS transfer_cars (
        id             SERIAL PRIMARY KEY,
        name           VARCHAR(120) NOT NULL,
        year           INTEGER,
        transmission   VARCHAR(20),
        price_per_hour INTEGER,
        type           VARCHAR(20),
        img            VARCHAR(255),
        available      BOOLEAN DEFAULT true
      );

      CREATE TABLE IF NOT EXISTS bookings (
        id          SERIAL PRIMARY KEY,
        car_id      INTEGER,
        car_name    VARCHAR(120),
        client_name VARCHAR(100),
        client_phone VARCHAR(20),
        start_date  VARCHAR(20),
        end_date    VARCHAR(20),
        total_price INTEGER,
        status      VARCHAR(20) DEFAULT 'pending',
        passport    VARCHAR(50),
        tg_user_id  BIGINT,
        created_at  TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS transfer_bookings (
        id          SERIAL PRIMARY KEY,
        car_id      INTEGER,
        car_name    VARCHAR(120),
        client_name VARCHAR(100),
        client_phone VARCHAR(20),
        route       VARCHAR(255),
        date        VARCHAR(20),
        hours       INTEGER,
        total_price INTEGER,
        status      VARCHAR(20) DEFAULT 'pending',
        receipt_url TEXT,
        tg_user_id  BIGINT,
        created_at  TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS messages (
        id         SERIAL PRIMARY KEY,
        title      VARCHAR(200),
        body       TEXT,
        target     VARCHAR(20) DEFAULT 'all',
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS fleet_status (
        car_id    INTEGER PRIMARY KEY,
        car_type  VARCHAR(20) DEFAULT 'rental',
        available BOOLEAN DEFAULT true
      );
    `);

    console.log('✓ Tables created');

    // Seed: rental cars
    const carsCount = (await client.query('SELECT COUNT(*) FROM cars')).rows[0].count;
    if (parseInt(carsCount) === 0) {
      await client.query(`
        INSERT INTO cars (name, year, transmission, price, class, img) VALUES
        ('Lada Granta', 2022, 'АКПП', 2600, 'econom', 'фото машин/Lada Granta.webp'),
        ('Lada Granta', 2023, 'МКПП', 2400, 'econom', 'фото машин/Lada Granta.webp'),
        ('Lada Granta', 2024, 'АКПП', 2800, 'econom', 'фото машин/Lada Granta.webp'),
        ('Lada Vesta', 2022, 'АКПП', 3200, 'econom', 'фото машин/Lada Vesta.webp'),
        ('Lada Vesta SW', 2023, 'АКПП', 3400, 'econom', 'фото машин/Lada Vesta SW.webp'),
        ('Lada Vesta Cross', 2023, 'АКПП', 3600, 'econom', 'фото машин/Lada Vesta Cross.webp'),
        ('Hyundai Solaris', 2021, 'АКПП', 3500, 'comfort', 'фото машин/Hyundai Solaris.webp'),
        ('Hyundai Solaris NEW', 2023, 'АКПП', 3800, 'comfort', 'фото машин/Hyundai Solaris NEW.webp'),
        ('Hyundai Elantra 2016', 2016, 'АКПП', 3600, 'comfort', 'фото машин/Hyundai Elantra 2016.webp'),
        ('Hyundai Creta', 2022, 'АКПП', 4500, 'comfort', 'фото машин/Hyundai Creta.webp'),
        ('Kia Rio', 2021, 'АКПП', 3400, 'comfort', 'фото машин/Kia Rio.webp'),
        ('Kia Rio x line', 2022, 'АКПП', 3700, 'comfort', 'фото машин/Kia Rio x line.webp'),
        ('Skoda Rapid 2020', 2020, 'АКПП', 3800, 'comfort', 'фото машин/Skoda Rapid 2020.webp'),
        ('Skoda Rapid 2021', 2021, 'АКПП', 4000, 'comfort', 'фото машин/Skoda Rapid 2021.webp'),
        ('Skoda Octavia 2021', 2021, 'АКПП', 4500, 'comfort', 'фото машин/Skoda Octavia 2021.webp'),
        ('Volkswagen Jetta', 2021, 'АКПП', 4200, 'comfort', 'фото машин/Volkswagen Jetta.webp'),
        ('Changan Eado', 2023, 'CVT', 4000, 'comfort-plus', 'фото машин/Changan Eado.webp'),
        ('Changan UNI-V 2024', 2024, 'CVT', 4800, 'comfort-plus', 'фото машин/Changan UNI-V 2024.webp'),
        ('Changan Lamore', 2024, 'CVT', 5200, 'comfort-plus', 'фото машин/Changan Lamore.webp'),
        ('Chery Tiggo 8 Pro', 2023, 'CVT', 5500, 'comfort-plus', 'фото машин/Chery Tiggo 8 Pro.webp'),
        ('Haval Jolion', 2023, 'CVT', 4900, 'comfort-plus', 'фото машин/Haval Jolion.webp'),
        ('Kia K5', 2022, 'АКПП', 5800, 'business', 'фото машин/Kia K5.webp'),
        ('Toyota Camry V70', 2020, 'АКПП', 6500, 'business', 'фото машин/Toyota Camry V70.webp'),
        ('Toyota Camry V75', 2023, 'АКПП', 7500, 'business', 'фото машин/Toyota Camry V75.webp'),
        ('BMW 320D XDRIVE', 2020, 'АКПП', 7000, 'business', 'фото машин/BMW 320D XDRIVE.webp'),
        ('BMW 5 серия 520d', 2021, 'АКПП', 8500, 'business', 'фото машин/BMW 5 серия 520d.webp'),
        ('Mercedes-Benz C 180', 2021, 'АКПП', 7500, 'business', 'фото машин/Mercedes-Benz C 180.webp'),
        ('Mercedes-Benz E-200 Premium', 2022, 'АКПП', 9000, 'business', 'фото машин/Mercedes-Benz E-200 Premium.webp'),
        ('Mercedes-Benz E-Class W-213', 2021, 'АКПП', 8500, 'business', 'фото машин/Mercedes-Benz E-Class W-213.webp'),
        ('Mercedes-Benz E-Class W-213 Restyling', 2023, 'АКПП', 10000, 'business', 'фото машин/Mercedes-Benz E-Class W-213 Restyling.webp')
      `);
      console.log('✓ Cars seeded');
    }

    // Seed: transfer cars
    const trCount = (await client.query('SELECT COUNT(*) FROM transfer_cars')).rows[0].count;
    if (parseInt(trCount) === 0) {
      await client.query(`
        INSERT INTO transfer_cars (name, year, transmission, price_per_hour, type, img) VALUES
        ('Kia K5', 2022, 'АКПП', 1800, 'sedan', 'фото машин/Kia K5.webp'),
        ('Toyota Camry V75', 2023, 'АКПП', 2500, 'sedan', 'фото машин/Toyota Camry V75.webp'),
        ('Mercedes-Benz E-Class W-213', 2021, 'АКПП', 3000, 'sedan', 'фото машин/Mercedes-Benz E-Class W-213.webp'),
        ('Mercedes-Benz E-Class W-213 Restyling', 2023, 'АКПП', 3500, 'sedan', 'фото машин/Mercedes-Benz E-Class W-213 Restyling.webp'),
        ('Mercedes-Benz E-Class W-214 Long', 2024, 'АКПП', 4000, 'sedan', 'фото машин/Mercedes-Benz E-Class W-214 Long.webp'),
        ('Mercedes-Benz S-Class W-222 Restyling', 2020, 'АКПП', 5000, 'sedan', 'фото машин/Mercedes-Benz S-Class W-222 Restyling.webp'),
        ('KIA Carnival 9 мест', 2022, 'АКПП', 3500, 'minivan', 'фото машин/KIA Carnival 9 мест.webp'),
        ('Mercedes-Benz V-class', 2021, 'АКПП', 4500, 'minivan', 'фото машин/Mercedes-Benz V-class.webp')
      `);
      console.log('✓ Transfer cars seeded');
    }

    console.log('✓ Migration complete');
  } finally {
    client.release();
    await pool.end();
  }
}

migrate().catch(err => {
  console.error('Migration failed:', err.message);
  process.exit(1);
});
