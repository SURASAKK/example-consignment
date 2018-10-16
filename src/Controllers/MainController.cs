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

    public class MainController : ControllerBase
    {
        readonly ConsignmentContext db;

        public MainController(ConsignmentContext db)
        {
            this.db = db;

        }

        // DELETE api/values/5
        [HttpDelete]
        public async Task NukeDatabase()
        {
            await db.Database.EnsureDeletedAsync();
        }
    }
}
