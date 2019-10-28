using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace OnboardingProject.Models
{
    public class ProductDataAccessLayer
    {
        readonly onboardingContext db = new onboardingContext();
        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
                return db.Product.ToList();
            }
            catch
            {
                throw;
            }
        }
        //To Add new product record     
        public int AddProduct(Product product)
        {
            try
            {
                db.Product.Add(product);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar customer   
        public int UpdateProduct(Product product)
        {
            try
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular product  
        public Product GetProductData(int id)
        {
            try
            {
                Product product = db.Product.Find(id);
                return product;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular customer   
        public int DeleteProduct(int id)
        {
            try
            {
                Product p = db.Product.Find(id);
                db.Product.Remove(p);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
