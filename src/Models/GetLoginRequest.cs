using System.ComponentModel.DataAnnotations;

namespace Consignment.Models
{
    public class GetLoginRequest
    {
        [Required]
        public string User { set; get; }
        [Required]
        public string Pass { set; get; }

    }

}