
namespace Sahyadri_Navigator_RESTAPI
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			// Add services to the container.

			builder.Services.AddControllers();
			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();
			builder.Services.AddDbContext<Sahyadri_Navigator_RESTAPI.Models.trekkdbContext>();


			var app = builder.Build();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseHttpsRedirection();

			app.UseAuthorization();


			app.MapControllers();
			app.UseCors(builder =>
			{
				builder.WithOrigins("http://localhost:3000") // Update with your React.js frontend URL
					   .AllowAnyMethod()
					   .AllowAnyHeader();
			});


			app.Run();
		}
	}
}
