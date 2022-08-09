
import './App.css';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const data = [
    {

      plan: "Free",
      price: 0,
      period: "month",
      currency: "$",
      features: [
        {
          title: "Single User",
          isEnable: true
          

        },
        {
          title: "5GB Storage",
          isEnable: true
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true
        },
        {
          title: "Community Access",
          isEnable: true
        },
        {
          title: "Unlimited Private Projects",
          isEnable: false
        },
        {
          title: "Dedicated Phone Support",
          isEnable: false
        },
        {
          title: "Free Sub domain",
          isEnable: false
        },
        {
          title: "Monthly Status Reports",
          isEnable: false
        }
      ]
    },
    {

      plan: "Plus",
      price: 9,
      period: "month",
      currency: "$",
      features: [
        {
          title: "5 Users",
          isEnable: true,
          isBold: true
        },
        {
          title: "50GB Storage",
          isEnable: true
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true
        },
        {
          title: "Community Access",
          isEnable: true
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true
        },
        {
          title: "Free Subdomain",
          isEnable: true
        },
        {
          title: "Monthly Status Reports",
          isEnable: false
        }
      ]
    },
    {

      plan: "Pro",
      price: 49,
      period: "month",
      currency: "$",
      features: [
        {
          title: "Unlimited Users",
          isEnable: true,
          isBold: true
        },
        {
          title: "150GB Storage",
          isEnable: true
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true
        },
        {
          title: "Community Access",
          isEnable: true
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true
        },
        {
          title: " Free Subdomains",
          isEnable: true
        },
        {
          title: "Monthly Status Reports",
          isEnable: true
        }
      ]
    }
  ];

  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              data.map((item) => {
                return <Card item={item}></Card>
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
