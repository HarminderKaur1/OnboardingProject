using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnboardingProject.Models;

namespace OnboardingProject.Controllers
{
    public class StoreController : Controller
    {
        StoreDataAccesLayer objStore = new StoreDataAccesLayer();
        [HttpGet]
        [Route("Store/GetStores")]
        public IEnumerable<Store> GetStores()
        {
            return objStore.GetAllStores();
        }
        [HttpPost]
        [Route("Store/Create")]
        public int Create(Store store)
        {
            return objStore.AddStore(store);
        }

        [HttpDelete]
        [Route("Store/Delete")]
        public int Delete(int id)
        {
            return objStore.DeleteStore(id);
        }
        [HttpPut]
        [Route("Store/Edit")]
        public int Edit(Store store)
        {
            return objStore.UpdateStore(store);
        }
    }
}