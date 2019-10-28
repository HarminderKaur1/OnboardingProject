using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnboardingProject.Models;

namespace OnboardingProject.Controllers
{
    public class CustomerController : Controller
    {
        CustomerDataAccessLayer objCustomer = new CustomerDataAccessLayer();

        [HttpGet]
        [Route("Customer/GetCustomers")]
        public IEnumerable<Customer> GetCustomers()
        {
            return objCustomer.GetAllCustomer();
        }
        [HttpGet]
        [Route("Customer/Details/{id}")]
        public Customer Details(int id)
        {
            return objCustomer.GetCustomerData(id);
        }

        [HttpPost]
        [Route("Customer/Create")]
        public int Create(Customer customer)
        {
            return objCustomer.AddCustomer(customer);
        }

        [HttpDelete]
        [Route("Customer/Delete")]
        public int Delete(int id)
        {
            return objCustomer.DeleteCustomer(id);
        }
        [HttpPut]
        [Route("Customer/Edit")]
        public int Edit(Customer customer)
        {
            return objCustomer.UpdateCustomer(customer);
        }
    }
}