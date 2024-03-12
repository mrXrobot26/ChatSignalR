using Microsoft.AspNetCore.SignalR;

namespace ChatSignalR.Hubs
{
    public class UserHub :Hub
    {
        public int TotalViews { get; set; } = 0;
        public async Task NewWindowLoaded()
        {
            TotalViews++;

            await Clients.All.SendAsync("updateTotalViews", TotalViews);

        }

    }
}
