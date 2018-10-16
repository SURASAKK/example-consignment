using System;
using System.Linq;
using System.Threading.Tasks;
using Consignment.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace Consignment.Services
{
    public class UserService
    {
        private readonly byte[] salt;
        private readonly ConsignmentContext db;

        public UserService(ConsignmentContext db)
        {
            this.db = db;
            this.salt = System.Text.Encoding.UTF8.GetBytes("4DI0P3K6");
        }
        public bool AddUser(GetUser data)
        {
            var hashedKey = Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: data.Password,
            salt: salt,
            prf: KeyDerivationPrf.HMACSHA1,
            iterationCount: 10000,
            numBytesRequested: 256 / 8));

            var hasUser = db.Users.Any(x => x.Username.Equals(data.Username));

            if (!hasUser)
            {
                db.Users.Add(new User
                {
                    Name = data.Name,
                    Gender = data.Gender,
                    Adderss = data.Adderss,
                    E_mail = data.E_mail,
                    Tel = data.Tel,
                    Username = data.Username,
                    Password = hashedKey
                });
                db.SaveChanges();
            }
            return false;
        }

        public async Task<bool> IsAuthorized(string username, string password)
        {
            var user = await db.Users.Where(x => x.Username.Equals(username)).FirstOrDefaultAsync();

            if (user != null)
            {
                var hashedKey = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                    password: password,
                    salt: salt,
                    prf: KeyDerivationPrf.HMACSHA1,
                    iterationCount: 10000,
                    numBytesRequested: 256 / 8));

                if (user.Password.Equals(hashedKey)) return true;
            }
            return false;
        }
    }
}