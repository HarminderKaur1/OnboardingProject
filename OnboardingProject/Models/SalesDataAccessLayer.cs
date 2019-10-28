using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace OnboardingProject.Models
{
    public class SalesDataAccessLayer
    {
        readonly onboardingContext db = new onboardingContext();
        public IEnumerable<Sales> GetAllSales()
        {
            try
            {
                return db.Sales.ToList();
            }
            catch
            {
                throw;
            }
        }
        //To Add new sales record     
        public int AddSales(Sales sales)
        {
            try
            {
                db.Sales.Add(sales);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar sales   
        public int UpdateSales(Sales sales)
        {
            try
            {
                db.Entry(sales).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular sale   
        public Sales GetSalesData(int id)
        {
            try
            {
                Sales sales = db.Sales.Find(id);
                return sales;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular sale   
        public int DeleteSales(int id)
        {
            try
            {
                Sales s = db.Sales.Find(id);
                db.Sales.Remove(s);
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

