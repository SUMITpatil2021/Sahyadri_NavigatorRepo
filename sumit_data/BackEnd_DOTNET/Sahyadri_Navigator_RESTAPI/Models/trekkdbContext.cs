using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Sahyadri_Navigator_RESTAPI.Models
{
    public partial class trekkdbContext : DbContext
    {
        public trekkdbContext()
        {
        }

        public trekkdbContext(DbContextOptions<trekkdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bookedtrekk> Bookedtrekks { get; set; } = null!;
        public virtual DbSet<Facility> Facilities { get; set; } = null!;
        public virtual DbSet<Image> Images { get; set; } = null!;
        public virtual DbSet<Login> Logins { get; set; } = null!;
        public virtual DbSet<Payment> Payments { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<TrekkDetail> TrekkDetails { get; set; } = null!;
        public virtual DbSet<Trekkingclub> Trekkingclubs { get; set; } = null!;
        public virtual DbSet<Trekklocation> Trekklocations { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=sumit;database=trekkdb", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Bookedtrekk>(entity =>
            {
                entity.HasKey(e => e.Bookid)
                    .HasName("PRIMARY");

                entity.ToTable("bookedtrekk");

                entity.HasIndex(e => e.Userid, "FKaven4is3nbjll4l79fs3hpfid");

                entity.Property(e => e.Bookid).HasColumnName("bookid");

                entity.Property(e => e.Charges).HasColumnName("charges");

                entity.Property(e => e.City)
                    .HasMaxLength(255)
                    .HasColumnName("city");

                entity.Property(e => e.Date)
                    .HasMaxLength(6)
                    .HasColumnName("date");

                entity.Property(e => e.Noofpersons).HasColumnName("noofpersons");

                entity.Property(e => e.Pickuppoint)
                    .HasMaxLength(255)
                    .HasColumnName("pickuppoint");

                entity.Property(e => e.Totalcharges).HasColumnName("totalcharges");

                entity.Property(e => e.Trekkingpoint)
                    .HasMaxLength(255)
                    .HasColumnName("trekkingpoint");

                entity.Property(e => e.Trekkname)
                    .HasMaxLength(255)
                    .HasColumnName("trekkname");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Bookedtrekks)
                    .HasForeignKey(d => d.Userid)
                    .HasConstraintName("FKaven4is3nbjll4l79fs3hpfid");
            });

            modelBuilder.Entity<Facility>(entity =>
            {
                entity.ToTable("facilities");

                entity.Property(e => e.Facilityid).HasColumnName("facilityid");

                entity.Property(e => e.Firstaid)
                    .HasMaxLength(255)
                    .HasColumnName("firstaid");

                entity.Property(e => e.Food)
                    .HasMaxLength(255)
                    .HasColumnName("food");

                entity.Property(e => e.Guidename)
                    .HasMaxLength(255)
                    .HasColumnName("guidename");

                entity.Property(e => e.Trainingprogram)
                    .HasMaxLength(255)
                    .HasColumnName("trainingprogram");

                entity.Property(e => e.Transportation)
                    .HasMaxLength(255)
                    .HasColumnName("transportation");

                entity.Property(e => e.Trekkingpole)
                    .HasMaxLength(255)
                    .HasColumnName("trekkingpole");
            });

            modelBuilder.Entity<Image>(entity =>
            {
                entity.HasKey(e => e.Imgid)
                    .HasName("PRIMARY");

                entity.ToTable("image");

                entity.Property(e => e.Imgid).HasColumnName("imgid");

                entity.Property(e => e.Image1).HasColumnName("image");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("login");

                entity.HasIndex(e => e.Roleid, "FK7556csmui0fcfn2ssqxmyt313");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.Roleid).HasColumnName("roleid");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.Username)
                    .HasMaxLength(255)
                    .HasColumnName("username");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Logins)
                    .HasForeignKey(d => d.Roleid)
                    .HasConstraintName("FK7556csmui0fcfn2ssqxmyt313");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.ToTable("payment");

                entity.Property(e => e.Paymentid).HasColumnName("paymentid");

                entity.Property(e => e.Noofpersons).HasColumnName("noofpersons");

                entity.Property(e => e.Paymentdate)
                    .HasMaxLength(6)
                    .HasColumnName("paymentdate");

                entity.Property(e => e.Paymentstatus)
                    .HasColumnType("bit(1)")
                    .HasColumnName("paymentstatus");

                entity.Property(e => e.Totalcharges).HasColumnName("totalcharges");

                entity.Property(e => e.Trekkername)
                    .HasMaxLength(255)
                    .HasColumnName("trekkername");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.Roleid)
                    .ValueGeneratedNever()
                    .HasColumnName("roleid");

                entity.Property(e => e.Roletype)
                    .HasMaxLength(255)
                    .HasColumnName("roletype");
            });

            modelBuilder.Entity<TrekkDetail>(entity =>
            {
                entity.HasKey(e => e.Trekkid)
                    .HasName("PRIMARY");

                entity.ToTable("trekk_details");

                entity.HasIndex(e => e.Clubid, "FK8gp8vwagjwaktnmrwrp1haq3w");

                entity.HasIndex(e => e.Facilityid, "FKc6kl6ht0vwaiq8yue4l30csfx");

                entity.HasIndex(e => e.Locationid, "FKipxljblac57vxwb3oa7vxan8x");

                entity.HasIndex(e => e.Userid, "FKjd8qja69ufophiraex99e4hny");

                entity.HasIndex(e => e.Imgid, "FKtn42w8dxofgq0wu8w7odg7v4o");

                entity.Property(e => e.Trekkid).HasColumnName("trekkid");

                entity.Property(e => e.Charges).HasColumnName("charges");

                entity.Property(e => e.Clubid).HasColumnName("clubid");

                entity.Property(e => e.Date)
                    .HasMaxLength(6)
                    .HasColumnName("date");

                entity.Property(e => e.Facilityid).HasColumnName("facilityid");

                entity.Property(e => e.Imgid).HasColumnName("imgid");

                entity.Property(e => e.Locationid).HasColumnName("locationid");

                entity.Property(e => e.Trekkname)
                    .HasMaxLength(255)
                    .HasColumnName("trekkname");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.Club)
                    .WithMany(p => p.TrekkDetailClubs)
                    .HasForeignKey(d => d.Clubid)
                    .HasConstraintName("FK8gp8vwagjwaktnmrwrp1haq3w");

                entity.HasOne(d => d.Facility)
                    .WithMany(p => p.TrekkDetails)
                    .HasForeignKey(d => d.Facilityid)
                    .HasConstraintName("FKc6kl6ht0vwaiq8yue4l30csfx");

                entity.HasOne(d => d.Img)
                    .WithMany(p => p.TrekkDetails)
                    .HasForeignKey(d => d.Imgid)
                    .HasConstraintName("FKtn42w8dxofgq0wu8w7odg7v4o");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.TrekkDetails)
                    .HasForeignKey(d => d.Locationid)
                    .HasConstraintName("FKipxljblac57vxwb3oa7vxan8x");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TrekkDetailUsers)
                    .HasForeignKey(d => d.Userid)
                    .HasConstraintName("FKjd8qja69ufophiraex99e4hny");
            });

            modelBuilder.Entity<Trekkingclub>(entity =>
            {
                entity.HasKey(e => e.Clubid)
                    .HasName("PRIMARY");

                entity.ToTable("trekkingclub");

                entity.HasIndex(e => e.Loginid, "FK5prxyq464j0nm05pv8c2uoaob");

                entity.Property(e => e.Clubid).HasColumnName("clubid");

                entity.Property(e => e.Contact)
                    .HasMaxLength(255)
                    .HasColumnName("contact");

                entity.Property(e => e.Edate)
                    .HasMaxLength(6)
                    .HasColumnName("edate");

                entity.Property(e => e.Emailid)
                    .HasMaxLength(255)
                    .HasColumnName("emailid");

                entity.Property(e => e.Licenseno).HasColumnName("licenseno");

                entity.Property(e => e.Loginid).HasColumnName("loginid");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.Property(e => e.Ownername)
                    .HasMaxLength(255)
                    .HasColumnName("ownername");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.Username)
                    .HasMaxLength(255)
                    .HasColumnName("username");

                entity.HasOne(d => d.Login)
                    .WithMany(p => p.Trekkingclubs)
                    .HasForeignKey(d => d.Loginid)
                    .HasConstraintName("FK5prxyq464j0nm05pv8c2uoaob");
            });

            modelBuilder.Entity<Trekklocation>(entity =>
            {
                entity.HasKey(e => e.Locationid)
                    .HasName("PRIMARY");

                entity.ToTable("trekklocation");

                entity.Property(e => e.Locationid).HasColumnName("locationid");

                entity.Property(e => e.City)
                    .HasMaxLength(255)
                    .HasColumnName("city");

                entity.Property(e => e.Landmark)
                    .HasMaxLength(255)
                    .HasColumnName("landmark");

                entity.Property(e => e.Trekkingpoint)
                    .HasMaxLength(255)
                    .HasColumnName("trekkingpoint");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.HasIndex(e => e.Loginid, "FKfav4u3xydspnypapu0vfm2d1k");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.Property(e => e.Contact)
                    .HasMaxLength(255)
                    .HasColumnName("contact");

                entity.Property(e => e.Emailid)
                    .HasMaxLength(255)
                    .HasColumnName("emailid");

                entity.Property(e => e.Loginid).HasColumnName("loginid");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.Username)
                    .HasMaxLength(255)
                    .HasColumnName("username");

                entity.HasOne(d => d.Login)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.Loginid)
                    .HasConstraintName("FKfav4u3xydspnypapu0vfm2d1k");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
