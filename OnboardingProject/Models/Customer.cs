using System;
using System.Collections.Generic;

namespace OnboardingProject.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Sales = new HashSet<Sales>();
        }

        public int Cid { get; set; }
        public string Cname { get; set; }
        public string Caddress { get; set; }

        public ICollection<Sales> Sales { get; set; }
    }
}
