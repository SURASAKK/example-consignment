using System;

namespace Consignment.Models
{
    public class GetUseradmin
    {
        public string Name_admin { get; set; }
        public string Gender { get; set; }
        public string Adderss { get; set; }
        public string E_mail { get; set; }
        public string Tel { get; set; }
        public string Username { get; set; }
        public User ID_User { get; set; }
        public SellDetail PostDetail_ID { get; set; }
        public SellData PostSell_ID { get; set; }
    }
}