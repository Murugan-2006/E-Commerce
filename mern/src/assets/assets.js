import realmef from './realmec65front.png';
import realmes from './realmec65sideview.png';
import realmeb from './realmec65back1.png';
 import star from './star.png';
import dellf from './dellfrontview.png';

import lenovof from './lenovofront.png';
import lenovob from './lenovobackview.png';
import lenovos from './lenovosideview.png';
import lenovoc from './lenovoclosedview.png';

import pocof from './pocofrontview.png';
import pocob from './pocobackview.png';
import pocos from './pocosideview.png';

import oppof from './oppofrontview.png';
import oppob from './oppobackview.png';
import oppos from './opposideview.png';

import logo from './logo.svg';
import search from './search.png'
import cross from './cross.png'
import delete1 from './delete.png';
import profile from './profile.gif';
import cart from './cart.png'
import menu from './menu.png'
import back from './back.png'
import Bestseller from '../component/Bestseller';
import tf7 from './tf7.png'
export const assets={
    realmeb,realmef,realmes,dellf,lenovob,lenovoc,lenovof,pocob,pocof,pocos,oppob,oppof,oppos,logo,search,profile,cart,menu,back,tf7,cross,delete1,star
};

export const Products = [
  // ---- Phones ----
  {
    id: 1,
    name: "Realme C65 ",
    brand: "Realme",
    category: "phone",
    price: 18999,
    image: [realmeb,realmef,realmes],
    Bestseller:true

  },
  {
    id: 2,
    name: "Oppo 17",
    brand: "Oppo",
    category: "phone",
    price: 54999,
    image: [oppof,oppob,oppos],
    Bestseller:true
  },
  {
    id: 3,
    name: "Poco 10",
    brand: "Poco",
    category: "phone",
    price: 67999,
    image: [pocof,pocof,pocos],
    Bestseller:true

    
  },
  {
    id: 4,
    name: "Lenovo ",
    brand: "Lenovo ",
    category: "Laptop",
    price: 49999,
    image: [lenovof,lenovob,lenovos,lenovoc]
  },
  {
    id: 5,
    name: "Dell",
    brand: "Dell",
    category: "Laptop",
    price: 69999,
    image: [dellf,lenovob,lenovoc]
  },

  // ---- Laptops ----
  {
    id: 6,
    name: "Realme C65 ",
    brand: "Realme",
    category: "phone",
    price: 18999,
    image: [oppos,realmeb],
    Bestseller:true

  },
  {
    id: 7,
    name: "Oppo 17",
    brand: "Oppo",
    category: "phone",
    price: 54999,
    image: [oppof,oppos,oppos],
  },
  {
    id: 8,
    name: "Poco 10",
    brand: "Poco",
    category: "phone",
    price: 67999,
    image: [pocof]
  },
  {
    id: 9,
    name: "Lenovo ",
    brand: "Lenovo ",
    category: "Laptop",
    price: 49999,
    image: [lenovof,lenovob,lenovos]
  },
  {
    id: 10,
    name: "Dell",
    brand: "Dell",
    category: "Laptop",
    price: 69999,
    image: [dellf,lenovof,lenovos],
    Bestseller:true

  },

]