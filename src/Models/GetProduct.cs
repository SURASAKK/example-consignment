using System;

namespace Consignment.Models
{
    public class GetProduct
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public int Amount { get; set; }
        public int Price { get; set; }
        public string Detail { get; set; }
        public string Image { get; set; }
        public string User { get; set; }
        public DateTime ProductDate { get; set; } = DateTime.Now;
    }
}