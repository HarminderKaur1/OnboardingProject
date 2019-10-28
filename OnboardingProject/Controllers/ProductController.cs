using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnboardingProject.Models;

namespace OnboardingProject.Controllers
{
    public class ProductController : Controller
    {
        ProductDataAccessLayer objProduct = new ProductDataAccessLayer();

        [HttpGet]
        [Route("Product/GetProducts")]
        public IEnumerable<Product> GetProducts()
        {
            return objProduct.GetAllProducts();
        }
        [HttpPost]
        [Route("Product/Create")]
        public int Create(Product product)
        {
            return objProduct.AddProduct(product);
        }

        [HttpDelete]
        [Route("Product/Delete")]
        public int Delete(int id)
        {
            return objProduct.DeleteProduct(id);
        }
        [HttpPut]
        [Route("Product/Edit")]
        public int Edit(Product product)
        {
            return objProduct.UpdateProduct(product);
        }
    }
}