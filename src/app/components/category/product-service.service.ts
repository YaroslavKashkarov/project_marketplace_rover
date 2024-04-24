import {Injectable} from '@angular/core';
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  bicycles: Product[] = [
    new Product('new','../../../assets/img/popular-items/img.png',1000,'A popular model of a modern bicycle\n' +
      '               24d'),
    new Product('used','../../../assets/img/popular-items/img_1.png',1300,'Mountain bicycle for sale. Well -\n' +
      '               maintained mountain bike, great for\n' +
      '               off-road adventures. Excellent\n' +
      '               condition, ready for a new rider\n' +
      '               26d'),
    new Product('used','../../../assets/img/popular-items/img_2.png',950,'City commuter bicycle. Stylish city\n' +
      '               bike for daily commuting. Smooth\n' +
      '               ride,\n' +
      '               in excellent condition.\n' +
      '               28d'),
    new Product('new','../../../assets/img/popular-items/img_3.png',900,'Speedy road bicycle.\n' +
      '               High-performance road bike for\n' +
      '               speed enthusiasts.\n' +
      '               Lightweight and aerodynamic design.\n' +
      '               28d'),
    new Product('used','../../../assets/img/popular-items/img_4.png',1500,'Versatile hybrid bicycle.\n' +
      '               Comfortable hybrid bike for city\n' +
      '               and off-road\n' +
      '               trails. Well-cared-for and\n' +
      '               versatile.\n' +
      '               24d'),
    new Product('new','../../../assets/img/popular-items/img_5.png',1500,'Junior rider\'s bicycle.\n' +
      '               Junior-sized bike, gently used and\n' +
      '               sturdy. Ideal\n' +
      '               for young cyclists.\n' +
      '               26d'),
    new Product('used','../../../assets/img/popular-items/img_6.png',1100,'VAll-terrain adventure bicycle.\n' +
      '               Explore the great outdoors with\n' +
      '               this\n' +
      '               rugged mountain bike. Robust\n' +
      '               build, excellent condition, and\n' +
      '               ready for\n' +
      '               trailblazing adventures.\n' +
      '               22d'),
    new Product('new','../../../assets/img/popular-items/img_7.png',850,'VAll-terrain adventure bicycle.\n' +
      '               Explore the great outdoors with\n' +
      '               this\n' +
      '               rugged mountain bike. Robust\n' +
      '               build, excellent condition, and\n' +
      '               ready for\n' +
      '               trailblazing adventures.\n' +
      '               22d'),
    new Product('new','../../../assets/img/popular-items/img_8.png',999,'Commuter bargain bicycle. Commute\n' +
      '               smarter with our bicycles on sale.\n' +
      '               Affordable, eco-friendly, and perfect\n' +
      '               for city living. Limited-time offer,\n' +
      '               act fast!'),
    new Product('used','../../../assets/img/popular-items/img_9.png',1199,'Mountain bicycle mega sale! Explore\n' +
      '               off-road adventures with our\n' +
      '               discounted\n' +
      '               mountain bikes. Durable, reliable,\n' +
      '               and perfect for all terrain.\n' +
      '               26d'),
    new Product('used','../../../assets/img/popular-items/img_10.png',1020,'City bicycle flash deal. Ride in\n' +
      '               style through the city streets with\n' +
      '               our\n' +
      '               cruiser bikes, now at a special\n' +
      '               price. Comfortable, trendy, and ready\n' +
      '               for\n' +
      '               urban exploration.\n' +
      '               28d'),
    new Product('new','../../../assets/img/popular-items/img_11.png',900,'Mountain bikes on sale! Elevate your\n' +
      '               trail experience with our discounted\n' +
      '               mountain bikes. Grab yours now for\n' +
      '               rugged adventures at an unbeatable\n' +
      '               price.\n' +
      '               28d')
  ]
  parts: Product [] =[
    new Product('used','../../../assets/img/parts/part_1.jpg',50,'Quality used bicycle gears for smooth riding.'),
    new Product('used','../../../assets/img/parts/part_2.jpg',40,'Quality bicycle gears for smooth and efficient cycling.'),
    new Product('used','../../../assets/img/parts/part_3.jpg',20,'Durable and comfortable bicycle pedals for smooth riding.'),
    new Product('new','../../../assets/img/parts/part_4.jpg',30,'High-quality bicycle gear for smooth gear shifting and efficient riding.'),
    new Product('used','../../../assets/img/parts/part_5.jpg',40,'Reliable and durable bicycle gear for seamless gear changes and enhanced cycling performance.'),
    new Product('new','../../../assets/img/parts/part_6.jpg',50,'Top-notch bicycle gear designed for seamless and efficient gear changes.'),
    new Product('used','../../../assets/img/parts/part_7.jpg',80,'Quality bicycle shock absorbers for smooth and comfortable rides over rough terrain.'),
    new Product('new','../../../assets/img/parts/part_8.jpg',30,'Durable and efficient bicycle pedals for smooth pedaling and enhanced riding experience.'),
    new Product('new','../../../assets/img/parts/part_9.jpg',50,'Comfortable and ergonomic bicycle saddles for enjoyable and pain-free rides.'),
    new Product('new','../../../assets/img/parts/part_10.jpg',100,'Selling a coigh-quality bicycle wheel for smooth and stable rides on various terrains.'),
    new Product('used','../../../assets/img/parts/part_11.jpg',25,'Vintage bicycle handlebars for a classic and nostalgic riding experience.'),
    new Product('used','../../../assets/img/parts/part_12.jpg',80,'Lightweight and durable bicycle wheel for agile and responsive riding.'),


  ]
  accessories: Product []=[
    new Product('new','../../../assets/img/accessories/accessorises_1.jpg',11,'Essential bicycle bell for safety and style'),
    new Product('used','../../../assets/img/accessories/accessorises_2.jpg',30,'Reliable bicycle wheel lock.'),
    new Product('used','../../../assets/img/accessories/accessorises_3.png',33,'Bright, durable, adjustable beam, easy installation, rechargeable battery, waterproof, long-lasting.'),
    new Product('used','../../../assets/img/accessories/accessorises_4.jpg',15,'Bright LED taillight for bicycles.'),
    new Product('used','../../../assets/img/accessories/accessorises_5.jpg',12,'Affordable, easy to install, provides clear rear view, durable material.'),
    new Product('used','../../../assets/img/accessories/accessorises_6.jpg',25,'Stylish LED retro headlight for classic bicycles.'),
    new Product('used','../../../assets/img/accessories/accessorises_7.jpg',28,'Durable and stylish bicycle baskets for storage.'),
    new Product('new','../../../assets/img/accessories/accessorises_8.jpg',33,'Practical and stylish storage solution.'),
    new Product('new','../../../assets/img/accessories/accessorises_9.png',40,'Sturdy rear bicycle rack for cargo transport.'),
    new Product('used','../../../assets/img/accessories/accessorises_10.png',10,'High-visibility bicycle reflectors for safety at night.'),
    new Product('used','../../../assets/img/accessories/accessorises_11.jpg',50,'Sturdy and versatile bicycle rack for cargo transport.'),
    new Product('new','../../../assets/img/accessories/accessorises_12.jpg',20,'Secure number lock for bicycles to prevent theft.'),

  ]
  services: Product []=[
    new Product('new','../../../assets/img/popular-items/img.png',12,'service 1'),
    new Product('new','../../../assets/img/popular-items/img.png',77,'service 2'),
    new Product('new','../../../assets/img/popular-items/img.png',43,'service 3'),
    new Product('new','../../../assets/img/popular-items/img.png',57,'service 4'),
    new Product('new','../../../assets/img/popular-items/img.png',775,'service 5'),
  ]
  clothes: Product []=[
    new Product('new','../../../assets/img/popular-items/img.png',20 ,'clothes 1'),
    new Product('used','../../../assets/img/popular-items/img.png',30,'clothes 2'),
    new Product('new','../../../assets/img/popular-items/img.png',40,'clothes 3'),
    new Product('used','../../../assets/img/popular-items/img.png',50,'clothes 4'),
    new Product('new','../../../assets/img/popular-items/img.png',55,'clothes 5'),
    new Product('new','../../../assets/img/popular-items/img.png',55,'clothes 5'),

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
