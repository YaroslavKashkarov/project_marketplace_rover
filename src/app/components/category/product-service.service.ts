import {Injectable} from '@angular/core';
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  bicycles: Product[] = [
    new Product("Bike 1",'new','../../../assets/img/popular-items/img.png',1000,'A popular model of a modern bicycle\n' +
      '               24d', new Date('2022-02-01')),
    new Product("Bike 2",'used','../../../assets/img/popular-items/img_1.png',1300,'Mountain bicycle for sale. Well -\n' +
      '               maintained mountain bike, great for\n' +
      '               off-road adventures. Excellent\n' +
      '               condition, ready for a new rider\n' +
      '               26d', new Date('2023-01-01')),
    new Product("Bike 3",'used','../../../assets/img/popular-items/img_2.png',950,'City commuter bicycle. Stylish city\n' +
      '               bike for daily commuting. Smooth\n' +
      '               ride,\n' +
      '               in excellent condition.\n' +
      '               28d', new Date('2022-01-06')),
    new Product("Bike 4",'new','../../../assets/img/popular-items/img_3.png',900,'Speedy road bicycle.\n' +
      '               High-performance road bike for\n' +
      '               speed enthusiasts.\n' +
      '               Lightweight and aerodynamic design.\n' +
      '               28d', new Date('2022-05-01')),
    new Product("Bike 5",'used','../../../assets/img/popular-items/img_4.png',1500,'Versatile hybrid bicycle.\n' +
      '               Comfortable hybrid bike for city\n' +
      '               and off-road\n' +
      '               trails. Well-cared-for and\n' +
      '               versatile.\n' +
      '               24d', new Date('2021-01-01')),
    new Product("Bike 6",'new','../../../assets/img/popular-items/img_5.png',1500,'Junior rider\'s bicycle.\n' +
      '               Junior-sized bike, gently used and\n' +
      '               sturdy. Ideal\n' +
      '               for young cyclists.\n' +
      '               26d', new Date('2024-04-01')),
    new Product("Bike 7",'used','../../../assets/img/popular-items/img_6.png',1100,'VAll-terrain adventure bicycle.\n' +
      '               Explore the great outdoors with\n' +
      '               this\n' +
      '               rugged mountain bike. Robust\n' +
      '               build, excellent condition, and\n' +
      '               ready for\n' +
      '               trailblazing adventures.\n' +
      '               22d', new Date('2023-06-07')),
    new Product("Bike 8",'new','../../../assets/img/popular-items/img_7.png',850,'VAll-terrain adventure bicycle.\n' +
      '               Explore the great outdoors with\n' +
      '               this\n' +
      '               rugged mountain bike. Robust\n' +
      '               build, excellent condition, and\n' +
      '               ready for\n' +
      '               trailblazing adventures.\n' +
      '               22d', new Date('2024-01-01')),
    new Product("Bike 9",'new','../../../assets/img/popular-items/img_8.png',999,'Commuter bargain bicycle. Commute\n' +
      '               smarter with our bicycles on sale.\n' +
      '               Affordable, eco-friendly, and perfect\n' +
      '               for city living. Limited-time offer,\n' +
      '               act fast!', new Date('2021-04-01')),
    new Product("Bike 10",'used','../../../assets/img/popular-items/img_9.png',1199,'Mountain bicycle mega sale! Explore\n' +
      '               off-road adventures with our\n' +
      '               discounted\n' +
      '               mountain bikes. Durable, reliable,\n' +
      '               and perfect for all terrain.\n' +
      '               26d', new Date('2022-01-02')),
    new Product("Bike 11 ",'used','../../../assets/img/popular-items/img_10.png',1020,'City bicycle flash deal. Ride in\n' +
      '               style through the city streets with\n' +
      '               our\n' +
      '               cruiser bikes, now at a special\n' +
      '               price. Comfortable, trendy, and ready\n' +
      '               for\n' +
      '               urban exploration.\n' +
      '               28d', new Date('2023-02-01')),
    new Product("Bike 12",'new','../../../assets/img/popular-items/img_11.png',900,'Mountain bikes on sale! Elevate your\n' +
      '               trail experience with our discounted\n' +
      '               mountain bikes. Grab yours now for\n' +
      '               rugged adventures at an unbeatable\n' +
      '               price.\n' +
      '               28d', new Date('2023-02-01'))
  ]
  parts: Product [] =[
    new Product("Part 1",'used','../../../assets/img/parts/part_1.jpg',50,'Quality used bicycle gears for smooth riding.', new Date('2022-01-04')),
    new Product("Part 2",'used','../../../assets/img/parts/part_2.jpg',40,'Quality bicycle gears for smooth and efficient cycling.', new Date('2022-01-03')),
    new Product("Part 3",'used','../../../assets/img/parts/part_3.jpg',20,'Durable and comfortable bicycle pedals for smooth riding.', new Date('2022-01-01')),
    new Product("Part 4",'new','../../../assets/img/parts/part_4.jpg',30,'High-quality bicycle gear for smooth gear shifting and efficient riding.', new Date('2022-01-02')),
    new Product("Part 5",'used','../../../assets/img/parts/part_5.jpg',40,'Reliable and durable bicycle gear for seamless gear changes and enhanced cycling performance.', new Date('2022-01-05')),
    new Product("Part 6",'new','../../../assets/img/parts/part_6.jpg',50,'Top-notch bicycle gear designed for seamless and efficient gear changes.', new Date('2022-11-01')),
    new Product("Part 7",'used','../../../assets/img/parts/part_7.jpg',80,'Quality bicycle shock absorbers for smooth and comfortable rides over rough terrain.', new Date('2022-05-01')),
    new Product("Part 8",'new','../../../assets/img/parts/part_8.jpg',30,'Durable and efficient bicycle pedals for smooth pedaling and enhanced riding experience.', new Date('2022-07-01')),
    new Product("Part 9",'new','../../../assets/img/parts/part_9.jpg',50,'Comfortable and ergonomic bicycle saddles for enjoyable and pain-free rides.', new Date('2022-02-01')),
    new Product("Part 10",'new','../../../assets/img/parts/part_10.jpg',100,'Selling a coigh-quality bicycle wheel for smooth and stable rides on various terrains.', new Date('2022-05-02')),
    new Product("Part 11",'used','../../../assets/img/parts/part_11.jpg',25,'Vintage bicycle handlebars for a classic and nostalgic riding experience.', new Date('2022-08-02')),
    new Product("Part 12",'used','../../../assets/img/parts/part_12.jpg',80,'Lightweight and durable bicycle wheel for agile and responsive riding.', new Date('2022-08-01')),


  ]
  accessories: Product []=[
    new Product("Accessory 1",'new','../../../assets/img/accessories/accessorises_1.jpg',11,'Essential bicycle bell for safety and style', new Date('2022-01-17')),
    new Product("Accessory 2",'used','../../../assets/img/accessories/accessorises_2.jpg',30,'Reliable bicycle wheel lock.', new Date('2022-01-2')),
    new Product("Accessory 3",'used','../../../assets/img/accessories/accessorises_3.png',33,'Bright, durable, adjustable beam, easy installation, rechargeable battery, waterproof, long-lasting.', new Date('2022-01-19')),
    new Product("Accessory 4",'used','../../../assets/img/accessories/accessorises_4.jpg',15,'Bright LED taillight for bicycles.', new Date('2022-01-13')),
    new Product("Accessory 5",'used','../../../assets/img/accessories/accessorises_5.jpg',12,'Affordable, easy to install, provides clear rear view, durable material.', new Date('2022-01-4')),
    new Product("Accessory 6",'used','../../../assets/img/accessories/accessorises_6.jpg',25,'Stylish LED retro headlight for classic bicycles.', new Date('2022-01-27')),
    new Product("Accessory 7",'used','../../../assets/img/accessories/accessorises_7.jpg',28,'Durable and stylish bicycle baskets for storage.', new Date('2022-01-21')),
    new Product("Accessory 8",'new','../../../assets/img/accessories/accessorises_8.jpg',33,'Practical and stylish storage solution.', new Date('2022-01-14')),
    new Product("Accessory 9",'new','../../../assets/img/accessories/accessorises_9.png',40,'Sturdy rear bicycle rack for cargo transport.', new Date('2022-01-08')),
    new Product("Accessory 10",'used','../../../assets/img/accessories/accessorises_10.png',10,'High-visibility bicycle reflectors for safety at night.', new Date('2022-01-31')),
    new Product("Accessory 11",'used','../../../assets/img/accessories/accessorises_11.jpg',50,'Sturdy and versatile bicycle rack for cargo transport.', new Date('2022-01-01')),
    new Product("Accessory 12",'new','../../../assets/img/accessories/accessorises_12.jpg',20,'Secure number lock for bicycles to prevent theft.', new Date('2022-01-025')),

  ]
  services: Product []=[
    new Product("Service 1",'new','../../../assets/img/popular-items/img.png',12,'service 1', new Date('2022-01-08')),
    new Product("Service 2",'new','../../../assets/img/popular-items/img.png',77,'service 2', new Date('2022-01-06')),
    new Product("Service 3",'new','../../../assets/img/popular-items/img.png',43,'service 3', new Date('2022-01-03')),
    new Product("Service 4",'new','../../../assets/img/popular-items/img.png',57,'service 4', new Date('2022-01-01')),
    new Product("Service 5",'new','../../../assets/img/popular-items/img.png',775,'service 5', new Date('2022-01-05')),
  ]
  clothes: Product []=[
    new Product("Clothes 1",'new','../../../assets/img/popular-items/img.png',20 ,'clothes 1', new Date('2022-01-08')),
    new Product("Clothes 2",'used','../../../assets/img/popular-items/img.png',30,'clothes 2', new Date('2022-01-02')),
    new Product("Clothes 3",'new','../../../assets/img/popular-items/img.png',40,'clothes 3', new Date('2022-01-04')),
    new Product("Clothes 4",'used','../../../assets/img/popular-items/img.png',50,'clothes 4', new Date('2022-01-01')),
    new Product("Clothes 5",'new','../../../assets/img/popular-items/img.png',55,'clothes 5', new Date('2022-01-01')),
    new Product("Clothes 6",'new','../../../assets/img/popular-items/img.png',55,'clothes 5', new Date('2022-01-03')),

  ]

  constructor() {
  }

  getProductsByCategory(category: string) {
    switch (category) {
      case 'bicycle':
        return this.bicycles;
      case 'parts':
        return this.parts;
      case 'accessories':
        return this.accessories;
      case 'service':
        return this.services;
      case 'clothes':
        return this.clothes;
      default:
        return this.bicycles;
    }

  }
}
