using System;

namespace Consignment.Models
{
    public class SellData
    {

        public int PostSell_ID { get; set; }
        public DateTime PostSell_Data { get; set; } = DateTime.Now;
        public string Username { get; set; }
        public SellDetail PostDetail_ID { get; set; }

    }
}