using System;

namespace Consignment.Models
{
    public class GetProduct
    {
        public int Product_ID { get; set; }
        public string Product_Name { get; set; }
        public DateTime Product_Date { get; set; } = DateTime.Now;
    }
}