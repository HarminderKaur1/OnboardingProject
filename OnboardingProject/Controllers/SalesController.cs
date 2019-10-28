using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnboardingProject.Models;
//using Newtonsoft.Json;


namespace OnboardingProject.Controllers
{
    public class SalesController : Controller
    {
        SalesDataAccessLayer objSales = new SalesDataAccessLayer();

        [HttpGet]
        [Route("Sales/GetSales")]
        public IEnumerable<Sales> GetSales()
        {
            return objSales.GetAllSales();
        }
        [HttpGet]
        [Route("Sales/Details/{id}")]
        public Sales Details(int id)
        {
            return objSales.GetSalesData(id);
        }

        [HttpPost]
        [Route("Sales/Create")]
        public int Create(Sales sales)
        {
            return objSales.AddSales(sales);
        }

        [HttpDelete]
        [Route("Sales/Delete")]
        public int Delete(int id)
        {
            return objSales.DeleteSales(id);
        }
        [HttpPut]
        [Route("Sales/Edit")]
        public int Edit(Sales sales)
        {
            return objSales.UpdateSales(sales);
        }
    }
}