const privateTransport = () => {
    return 0.9246976791670614 * 16000;
  },
  publicTransport = () => {
    return 0.5430763054644973 * 16000;
  },
  biking_walking = () => {
    return 0;
  },
  meateater = () => {
    const aftensmad = () => {
      // https://www.fooddata.dk/keyhole/userfiles/mvfodevarer.pdf
      // https://www.valdemarsro.dk/lasagne/
      // Ingredienser
      // Lasagnesauce
      // 2 løg, finthakket
      // 4 fed hvidløg, finthakket
      // 2 spsk olivenolie
      // 500 g hakket oksekød
      // 2 tsk oregano, tørret
      // 1 tsk timian, tørret
      // 4 gulerod, groftrevet
      // 5 stængler bladselleri, groftrevet
      // 1 squash, groftrevet
      // 1 dl tomatpuré
      // 2 dåser hakkede tomater
      // 1 dl rødvin, (kan undlades)
      // salt
      // sort peber, friskkværnet
      // Mornaysauce
      // 2 spsk smør
      // 2 spsk hvedemel
      // 3 dl mælk
      // 1 drys muskatnød, fintrevet
      // 125 g frisk mozzarella
      // Derudover
      // 200 g lasagneplader
      // 125 g frisk mozzarella
      // values in kilograms, average weights taken
      const løg = (2 * 100) / 1000,
        hvidløg = (4 * 6) / 1000,
        olivenolie = (2 * 14) / 1000,
        hakketOksekød = 500 / 1000,
        oregano = 2 / 1000,
        timian = 1 / 1000,
        gulerod = (4 * 65) / 1000,
        bladselleri = (30 * 5) / 1000,
        squash = 285 / 1000,
        tomatpuré = (6 * 18) / 1000,
        hakkedeTomater = (2 * 60) / 1000,
        smør = (14 * 2) / 1000,
        hvedemel = (9 * 2) / 1000,
        mælk = 300 / 1000,
        mozzarella = 250 / 1000,
        lasagneplader = 200 / 1000;

      const intensityKilograms =
        løg * 0.085 +
        hvidløg * 0.57 +
        olivenolie * 3.206 +
        hakketOksekød * 26.61 +
        gulerod * 0.2 +
        bladselleri * 0.18 +
        squash * 0.21 +
        tomatpuré * 0.747 +
        hakkedeTomater * 0.45 +
        smør * 9.25 +
        hvedemel * 0.358 +
        mælk * 1.29 +
        mozzarella * 7.5 +
        lasagneplader * 1.2;

      return intensityKilograms / 4;
    };

    const morgenmad = () => {
      const mælk = 0.4,
        vand = 0.4,
        havregryn = 0.125;

      const intensityKilograms = mælk * 1.29 + vand * 0.001 + havregryn * 0.38;

      return intensityKilograms / 4;
    };

    const frikadeller = () => {
      const svinekød = 0.5,
        æg = 0.055,
        løg = 1.5 * 0.1,
        mælk = 0.05,
        fløde = 0.1;

      const intensityKilograms =
        æg * 3.46 + svinekød * 5.74 + løg * 0.085 + mælk * 1.29 + fløde * 5.64;

      return intensityKilograms / 4;
    };

    const frokost = () => {
      const rugbrød = 0.045 * 3,
        smør = 0.015,
        ost = 0.02,
        leverpostej = 0.05,
        æg = 0.055,
        mayo = 0.015,
        mælk = 0.2;

      const intensityKilograms =
        rugbrød * 0.93 +
        smør * 9.25 +
        ost * 8.55 +
        leverpostej * 6 +
        æg * 3.46 +
        mayo * 10 +
        mælk * 1.29;

      return intensityKilograms;
    };

    return (aftensmad() + frokost() + morgenmad()) * 365;
  },
  vegetarian = () => {
    const morgenmad = () => {
      const mælk = 0.4,
        vand = 0.4,
        havregryn = 0.125;

      const intensityKilograms = mælk * 1.29 + vand * 0.001 + havregryn * 0.38;

      return intensityKilograms / 4;
    };

    const frokost = () => {
      const rugbrød = 0.045 * 3,
        smør = 0.015,
        ost = 0.02,
        æg = 0.11,
        mayo = 0.015,
        mælk = 0.2;

      const intensityKilograms =
        rugbrød * 0.93 +
        smør * 9.25 +
        ost * 8.55 +
        æg * 3.46 +
        mayo * 10 +
        mælk * 1.29;

      return intensityKilograms;
    };

    const aftensmad = () => {
      // https://www.valdemarsro.dk/vegetar-lasagne/?antal=6
      // 6 pers
      const løg = (3 * 100) / 1000,
        hvidløg = (4 * 6) / 1000,
        olivenolie = (4 * 14) / 1000,
        gulerod = (4 * 65) / 1000,
        bladselleri = (30 * 3) / 1000,
        squash = 285 / 1000,
        tomatpuré = (6 * 18) / 1000,
        hakkedeTomater = (2 * 60) / 1000,
        smør = (14 * 2) / 1000,
        hvedemel = (9 * 2) / 1000,
        mælk = 300 / 1000,
        mozzarella = 125 / 1000,
        lasagneplader = 250 / 1000,
        spinat = 0.5,
        fløde = 1.15,
        oregano = 2 / 1000,
        timian = 1 / 1000,
        aubergine = 270 / 1000,
        champignon = 0.25;

      const intensityKilograms =
        løg * 0.085 +
        hvidløg * 0.57 +
        olivenolie * 3.206 +
        gulerod * 0.2 +
        bladselleri * 0.18 +
        squash * 0.21 +
        tomatpuré * 0.747 +
        hakkedeTomater * 0.45 +
        smør * 9.25 +
        hvedemel * 0.358 +
        mælk * 1.29 +
        mozzarella * 7.5 +
        lasagneplader * 1.2 +
        spinat * 0.54 +
        fløde * 5.64 +
        aubergine * 0.21 +
        champignon * 0.27;

      return intensityKilograms / 6;
    };

    return (aftensmad() + frokost() + morgenmad()) * 365;
  },
  vegan = () => {
    const morgenmad = () => {
      const havremælk = 0.4,
        vand = 0.4,
        havregryn = 0.125;

      const intensityKilograms =
        havremælk * 0.42 + vand * 0.001 + havregryn * 0.38;

      return intensityKilograms / 4;
    };

    const frokost = () => {
      const rugbrød = 0.045 * 3,
        veganCheese = 0.02,
        hummus = 0.1,
        veganMayo = 0.015,
        mælk = 0.2;

      const intensityKilograms =
        rugbrød * 0.93 +
        veganCheese * 0.5 +
        hummus * 0.8 +
        veganMayo * 1 +
        mælk * 0.75;

      return intensityKilograms;
    };

    const aftensmad = () => {
      //https://micadeli.dk/vegansk-lasagne/
      const løg = (2 * 100) / 1000,
        hvidløg = (3 * 6) / 1000,
        gulerod = (4 * 65) / 1000,
        tomatpuré = (6 * 18) / 1000,
        hakkedeTomater = (2 * 60) / 1000,
        hvedemel = (9 * 2) / 1000,
        lasagneplader = 250 / 1000,
        spinat = 0.5,
        aubergine = 270 / 1000,
        champignon = 0.2,
        mælk = 0.5,
        ost = 0.12;

      const intensityKilograms =
        løg * 0.085 +
        hvidløg * 0.57 +
        gulerod * 0.2 +
        tomatpuré * 0.747 +
        hakkedeTomater * 0.45 +
        hvedemel * 0.358 +
        lasagneplader * 1.2 +
        spinat * 0.54 +
        aubergine * 0.21 +
        champignon * 0.27 +
        mælk * 0.42 +
        ost * 0.5;

      return intensityKilograms / 6;
    };

    return (aftensmad() + frokost() + morgenmad()) * 365;
  };

export {
  meateater,
  vegetarian,
  vegan,
  privateTransport,
  publicTransport,
  biking_walking,
};
