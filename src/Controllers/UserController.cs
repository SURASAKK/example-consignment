using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Consignment.Models;
using Consignment.Services;
using Microsoft.AspNetCore.Mvc;

namespace Consignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserController : ControllerBase
    {
        readonly ConsignmentContext db;
        readonly UserService userService;

        public UserController(ConsignmentContext db, UserService userService)
        {
            this.db = db;
            this.userService = userService;

        }

        [HttpPost]
        public async Task<ActionResult> LoginRequest([FromBody] GetLoginRequest request)
        {
            var IsAuthorized = await userService.IsAuthorized(request.User, request.Pass);
            if (IsAuthorized)
            {
                //  base64 UTF8 (request.User:request.pass)
                var account = $"{request.User}:{request.Pass}";
                var accountBytes = System.Text.Encoding.UTF8.GetBytes(account);

                var result = new { accessToken = Convert.ToBase64String(accountBytes) };
                return Ok(result);
            }
            return Unauthorized();
        }

        [HttpPost]
        public ActionResult AddUser([FromBody] GetUser data)
        {
            var userlist = db.Users.Where(x => x.Username == data.Username).Select(x => x.Username).FirstOrDefault();
            if (userlist != data.Username && data.Username != null)
            {
                userService.AddUser(data);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
