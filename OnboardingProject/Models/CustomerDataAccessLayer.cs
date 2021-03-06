﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace OnboardingProject.Models
{
    public class CustomerDataAccessLayer
    {
        readonly onboardingContext db = new onboardingContext();
        public IEnumerable<Customer> GetAllCustomer()
        {
            try
            {
                return db.Customer.ToList();
            }
            catch
            {
                throw;
            }
        }
        //To Add new customer record     
        public int AddCustomer(Customer customer)
        {
            try
            {
                db.Customer.Add(customer);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar customer   
        public int UpdateCustomer(Customer customer)
        {
            try
            {
                db.Entry(customer).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular customer   
        public Customer GetCustomerData(int id)
        {
            try
            {
                Customer customer = db.Customer.Find(id);
                return customer;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular customer   
        public int DeleteCustomer(int id)
        {
            try
            {
                Customer c = db.Customer.Find(id);
                db.Customer.Remove(c);
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
