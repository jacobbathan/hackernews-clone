//using Microsoft.Extensions.Configuration;
//using Microsoft.Extensions.DependencyInjection;
//using sabio_project.DataProvider;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace sabio_project
//{
//    public class DependancyInjection
//    {
//        public static void ConfigureServices(IServiceCollection services, IConfiguration configuration)
//        {
//            if (configuration is IConfigurationRoot)
//            {
//                services.AddSingleton<IConfigurationRoot>(configuration as IConfigurationRoot);
//            }

//            services.AddSingleton<IConfiguration>(configuration);

//            string connectionString = configuration.GetConnectionString("Default");

//            services.AddSingleton<IDataProvider, SqlDataProvider>(delegate (IServiceProvider provider)
//            {
//                return new SqlDataProvider(connectionString);
//            });
//        }
//    }
//}
