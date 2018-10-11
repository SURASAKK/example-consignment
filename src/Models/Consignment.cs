using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Consignment.Models
{
    public class ConsignmentContext : DbContext
    {
        public ConsignmentContext(DbContextOptions<ConsignmentContext> options)
            : base(options)
        { }

        public DbSet<User_account> User_account { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User_account>()
            .HasData(
                new { Username = "admin", Password = "admin", Role = "" }
                );

        }
    }

    public class User_account
    {
        [Key]
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }

    }
    public class User_admin
    {
        [Key]
        public int ID_admin { get; set; }
        public string Name_admin { get; set; }
        public string Gender { get; set; }
        public string Adderss { get; set; }
        public string E_mail { get; set; }
        public string Tel { get; set; }
        public string Username { get; set; }
        public int ID_User { get; set; }
        public int PostDetail_ID { get; set; }
        public int PostSell_ID { get; set; }
        public int Product_ID { get; set; }

    }

    public class User
    {
        [Key]
        public int ID_User { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Adderss { get; set; }
        public string E_mail { get; set; }
        public string Tel { get; set; }
        public string Username { get; set; }

    }

    public class Post_detail
    {
        [Key]
        public int PostDetail_ID { get; set; }
        public int Amount { get; set; }
        public int Price { get; set; }
        public string Detail { get; set; }
        public string Image { get; set; }
        public int Product_ID { get; set; }

    }

    public class Post_sell
    {
        [Key]
        public int PostSell_ID { get; set; }
        public DateTime PostSell_Data { get; set; } = DateTime.Now;
        public string Username { get; set; }
        public int PostDetail_ID { get; set; }

    }

    public class Product
    {
        public int Product_ID { get; set; }
        public string Product_Name { get; set; }
        public DateTime Product_Date { get; set; } = DateTime.Now;

    }


}