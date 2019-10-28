using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace OnboardingProject.Models
{
    public partial class onboardingContext : DbContext
    {
        public onboardingContext()
        {
        }

        public onboardingContext(DbContextOptions<onboardingContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Sales> Sales { get; set; }
        public virtual DbSet<Store> Store { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server= HARRYSANDHU\\SQLEXPRESS; Database =onboarding; Trusted_Connection =True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Cid);

                entity.ToTable("customer");

                entity.Property(e => e.Cid).HasColumnName("CID");

                entity.Property(e => e.Caddress)
                    .IsRequired()
                    .HasColumnName("CAddress")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Cname)
                    .IsRequired()
                    .HasColumnName("CName")
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.Pid);

                entity.ToTable("PRODUCT");

                entity.Property(e => e.Pid).HasColumnName("PID");

                entity.Property(e => e.Pname)
                    .IsRequired()
                    .HasColumnName("PName")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Pprice).HasColumnName("PPRICE");
            });

            modelBuilder.Entity<Sales>(entity =>
            {
                entity.HasKey(e => e.Saleid);

                entity.ToTable("SALES");

                entity.Property(e => e.Saleid).HasColumnName("SALEID");

                entity.Property(e => e.Cid).HasColumnName("CID");

                entity.Property(e => e.Pid).HasColumnName("PID");

                entity.Property(e => e.Sid).HasColumnName("SID");

                entity.HasOne(d => d.C)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("FK__SALES__CID__5070F446");

                entity.HasOne(d => d.P)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.Pid)
                    .HasConstraintName("FK__SALES__PID__5165187F");

                entity.HasOne(d => d.S)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.Sid)
                    .HasConstraintName("FK__SALES__SID__52593CB8");
            });

            modelBuilder.Entity<Store>(entity =>
            {
                entity.HasKey(e => e.Sid);

                entity.ToTable("STORE");

                entity.Property(e => e.Sid).HasColumnName("SID");

                entity.Property(e => e.Saddress)
                    .IsRequired()
                    .HasColumnName("SAddress")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Sname)
                    .IsRequired()
                    .HasColumnName("SName")
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });
        }
    }
}
