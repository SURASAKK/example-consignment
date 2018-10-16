using System;

namespace Consignment.Models
{
    public class Postsell
    {

        public int PostSell_ID { get; set; }
        public DateTime PostSell_Data { get; set; } = DateTime.Now;
        public string Username { get; set; }
        public Postdetail PostDetail_ID { get; set; }

    }
}