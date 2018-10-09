using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Consignment.Models
{
    public class ConsignmentContext : DbContext
    {
        public ConsignmentContext(DbContextOptions<ConsignmentContext> options)
            : base(options)
        { }

        public DbSet<Mannage> Mannage { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Mannage>()
            .HasData(
                new { Mannage_Id = 1, Firstname = "admin", Lastname = "admin" },
                new { Mannage_Id = 2, Firstname = "admin2", Lastname = "1234" }
                );

        }
    }

    public class Mannage
    {
        [Key]
        public int Mannage_Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }

    }

}