using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Consignment.Models;
using Microsoft.AspNetCore.Mvc;

namespace Consignment.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

    public class ProductController : ControllerBase
    {
        readonly ConsignmentContext db;

        public ProductController(ConsignmentContext db)
        {
            this.db = db;
        }
        public ActionResult consignProduct([FromBody]GetProduct data)
        {
            return Ok();
        }
    }
}
