using System;

namespace Consignment.Models
{
    public class Postdetail
    {

        public int PostDetail_ID { get; set; }
        public int Amount { get; set; }
        public int Price { get; set; }
        public string Detail { get; set; }
        public string Image { get; set; }
        public Product Product_ID { get; set; }

    }
}