using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace Consignment.Models
{
    public class ConsignmentContext : DbContext
    {
        public ConsignmentContext(DbContextOptions<ConsignmentContext> options)
            : base(options)
        { }

        public DbSet<User_account> User_Accounts { get; set; }
        public DbSet<User_admin> User_Admins { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Post_detail> Post_Details { get; set; }
        public DbSet<Post_sell> Post_Sells { get; set; }
        public DbSet<Product> Products { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User_account>()
            .HasData(
                new { Id = 1, Username = "admin", Password = "admin" }
                );

        }
    }

    public class User_account
    {
        [Key]
        [JsonIgnore]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

    }
    public class User_admin
    {
        [Key]
        [JsonIgnore]
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
        [Key]
        public int Product_ID { get; set; }
        public string Product_Name { get; set; }
        public DateTime Product_Date { get; set; } = DateTime.Now;

    }


}