import React, { useState } from "react";
import "./SearchBarSection.css";

const SearchBarSection = () => {
  const productCopy = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      category: "men's clothing",
      price: "109.95",
      description: "men",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      category: "men's clothing",
      price: "22.3",
      tags: "men",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      category: "men's clothing",
      price: "125.4",
      tags: " men",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      category: "men's clothing",
      price: "55.4",
      tags: "men.",
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      category: "jewelery",
      price: "55.4",
      tags: "jeweleries",
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      category: "jewelery",
      price: "55.4",
      tags: "jeweleries",
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      category: "jewelery",
      price: "55.4",
      tags: "jeweleries",
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double        ",
      category: "jewelery",
      price: "55.4",
      tags: "jeweleries",
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0         ",
      category: "electronics",
      price: "55.4",
      tags: "electronic",
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s        ",
      category: "electronics",
      price: "55.4",
      tags: "electronic",
    },
    {
      id: 11,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats ",
      category: "	women's clothing ",
      price: "55.4",
      tags: "women",
    },
    {
      id: 12,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket        ",
      category: "	women's clothing ",
      price: "55.4",
      tags: " women",
    },
    {
      id: 13,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats ",
      category: "	women's clothing ",
      price: "55.4",
      tags: "women",
    },
    {
      id: 14,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats ",
      category: "	women's clothing ",
      price: "55.4",
      tags: "women",
    },
  ];
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      category: "men's clothing",
      price: "109.95",
      description: "men",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      category: "men's clothing",
      price: "22.3",
      tags: "men",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      category: "men's clothing",
      price: "125.4",
      tags: " men",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      category: "men's clothing",
      price: "55.4",
      tags: "men.",
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      category: "jewelery",
      price: "55.4",
      tags: "jeweleries",
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      category: "jewelery",
      price: "55.4",
      tags: "jeweleries",
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      category: "jewelery",
      price: "55.4",
      tags: "jeweleries",
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double        ",
      category: "jewelery",
      price: "55.4",
      tags: "jeweleries",
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0         ",
      category: "electronics",
      price: "55.4",
      tags: "electronic",
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s        ",
      category: "electronics",
      price: "55.4",
      tags: "electronic",
    },
    {
      id: 11,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats ",
      category: "	women's clothing ",
      price: "55.4",
      tags: "women",
    },
    {
      id: 12,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket        ",
      category: "	women's clothing ",
      price: "55.4",
      tags: " women",
    },
    {
      id: 13,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats ",
      category: "	women's clothing ",
      price: "55.4",
      tags: "women",
    },
    {
      id: 14,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats ",
      category: "	women's clothing ",
      price: "55.4",
      tags: "women",
    },
  ]);

  const [search, setSearch] = useState("");

  // const filteredProducts = products.filter((product) => {
  //   if (
  //     product.tags.toLowerCase().includes(search) ||
  //     product.title.toLowerCase().includes(search) ||
  //     product.category.toLowerCase().includes(search)
  //   ) {
  //     return product;
  //   }
  // });

  return (
    <div className="searchBarSection">
      <div class="searchBar">
        <input
          className="input"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
            setProducts(
              productCopy.filter((product) => {
                if (
                  product.tags?.toLowerCase().includes(e.target.value) ||
                  product.title?.toLowerCase().includes(e.target.value) ||
                  product.category?.toLowerCase().includes(e.target.value)
                ) {
                  return product;
                }
              })
            );
          }}
        />
        <button className="button">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="display">
        {products.map((product) => (
          <div className="product">
            <h6>{product.category}</h6>
            <h6>{product.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBarSection;
