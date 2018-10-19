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

        // public DbSet<User_account> User_Accounts { get; set; }
        public DbSet<User_admin> User_Admins { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Sell_Detail> Post_Details { get; set; }
        public DbSet<Sell_Data> Post_Sells { get; set; }
        /* 
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User_account>()
            .HasData(
                new { Id = 1, Username = "admin", Password = "admin" }
                );

        }*/
    }

    // ตารางอนุมัติ
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
    // ตารางสมาชิก
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
        public string Password { get; set; }

    }

    // รายละเอียดฝากขาย
    public class Sell_Detail
    {
        [Key]
        public int PostDetail_ID { get; set; }
        public int Amount { get; set; }
        public int Price { get; set; }
        public string Detail { get; set; }
        public string Image { get; set; }
        public string Product_Name { get; set; }
        public DateTime Product_Date { get; set; } = DateTime.Now;
        public Boolean Status { get; set; }
    }
    // ตารางขาย
    public class Sell_Data
    {
        [Key]
        public int PostSell_ID { get; set; }
        public string Username { get; set; }
        public int PostDetail_ID { get; set; }

    }

}