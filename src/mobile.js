// Progression 1 SmartPhone

class SmartPhone {
  constructor(ram, batterypower, price) {
    this.ram = ram;
    this.batterypower = batterypower;
    this.price = price;
  }
  displayFeatures() {
    return this.ram + '\n' + this.batterypower + '\n' + this.price;
  }
remainingAmount(priceIHave) {
  this.price = this.price - priceIHave;
}
}

// Progression 2 AndroidPhone

class AndroidPhone extends SmartPhone {
  constructor(modelName, ram, batterypower, price) {
    super(ram, batterypower, price);
    this.modelName = modelName;
  }
  displayFeatures() {
    return(
      this.modelName + 
      '\n' +
      this.ram +
      '\n' +
      this.batterypower +
      '\n' +
      this.price 
    );
  }
  remainingAmount(priceIHave) {
    this.price = priceIHave - this.price;
    if (this.price > 0) {
      return `Customer has remaining Rs.${this.price} after buying the android phone`;
    } else{
      return 'Customer has no more amount';
    }
  }
}

// Progression 3 IPhone

class IPhone extends SmartPhone {
  constructor(seriesName, ram, batterypower, price){
    super(ram, batterypower, price)
    this.seriesName = seriesName;
  }
  displayFeatures() {
    return (
      this.seriesName +
      '\n' +
      this.ram +
      '\n' +
      this.batterypower +
      '\n' +
      this.price 
    );
  }
  remainingAmount(priceIHave) {
    let startingCost = this.price;
    this.price = priceIHave - this.price;

    let resultString = 
    this.price <= 0
    ? 'Customer has no more amount'
    : 'Customer has remaining Rs.' + this.price + 'after buying an iphone';

    if (startingCost > priceIHave) {
      return "Customer can't able to buy a phone due to insufficient amount";
    }else {
      return resultString;
    }
  }
}

// Progression 4  Progression 1 MobileCampus

class MobileCampus {
  constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
   this.NoOfMobiles = NoOfMobiles;
   this.NoOfAndroidMobiles = NoOfAndroidMobiles;
   this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
    }
  changeMobileAvailabilityNumber(count, type){
    this.NoOfMobiles -= count;
    if (type === 'android') {
      this.NoOfAndroidMobiles -= count;
      return `Available android mobiles are ${this.NoOfAndroidMobiles}`;
    }else if (type === 'iphone') {
      this.NoOfIPhoneMobiles -= count;
      return `Available iphone mobiles are ${this.NoOfIPhoneMobiles}`;
  }
  }
}
