using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Sahyadri_Navigator_RESTAPI.Models;

namespace Sahyadri_Navigator_RESTAPI.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	//[EnableCors]
	public class BookedtrekkController : Controller
	{
		[HttpGet]
		public Bookedtrekk? GetBookedtrekk(int Bookid)
		{
			Bookedtrekk?  bookedtrekk = new Bookedtrekk	();
			using (var db = new trekkdbContext())
			{
				bookedtrekk = db.Bookedtrekks.Find(Bookid);
			}
			return  bookedtrekk;
		} 

		

	}
}
