import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Truck, Package, MapPin } from "lucide-react";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Moving Resources & Tips | LiftNHaul</title>
        <meta name="description" content="Comprehensive moving resources, packing guides, and service area information to help make your relocation smooth and stress-free." />
        <meta name="keywords" content="moving resources, moving tips, packing guide, service areas, relocation help" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">Moving Resources</h1>
        <p className="text-lg text-gray-700 mb-8">
          Everything you need for a successful move, from packing tips to service area information.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/resources/moving-tips">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Moving Tips</CardTitle>
                <CardDescription>Essential tips and tricks for a smooth move</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learn the best practices for organizing your move, from timeline planning to moving day execution.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/resources/packing-guide">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Packing Guide</CardTitle>
                <CardDescription>Room-by-room packing strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get expert advice on packing your belongings safely and efficiently for transport.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/resources/service-areas">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Service Areas</CardTitle>
                <CardDescription>Areas we serve in Western WA</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learn about our service coverage in Pierce, King, Thurston, and Kitsap counties.</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Service Areas</h2>
          <p className="text-lg text-gray-700 mb-8">
            We provide professional moving services throughout Western Washington, serving these major counties:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/resources/service-areas/pierce-county">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Pierce County</CardTitle>
                  <CardDescription>Tacoma, Puyallup, Lakewood</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/resources/service-areas/king-county">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>King County</CardTitle>
                  <CardDescription>Seattle, Bellevue, Kent</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/resources/service-areas/thurston-county">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Thurston County</CardTitle>
                  <CardDescription>Olympia, Lacey, Tumwater</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/resources/service-areas/kitsap-county">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Kitsap County</CardTitle>
                  <CardDescription>Bremerton, Port Orchard, Poulsbo</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;