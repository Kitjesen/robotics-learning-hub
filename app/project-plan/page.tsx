import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CalendarDays, CheckCircle2, Clock, AlertTriangle } from 'lucide-react'

export default function ProjectPlanPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project Plan & Update Schedule</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ongoing Tasks</CardTitle>
            <CardDescription>Current focus areas of development</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                <span>Implementing user authentication for favorites on /resources page</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                <span>Developing /resources/[category]/[subcategory] pages</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                <span>Creating /resources/[category]/[section] pages</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                <span>Enhancing dashboard and community pages</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Features</CardTitle>
            <CardDescription>Features planned for future implementation</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                <span>AI-powered recommendations for /hardware-catalog page</span>
              </li>
              <li className="flex items-center">
                <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                <span>Dedicated favorites page for saved resources</span>
              </li>
              <li className="flex items-center">
                <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                <span>Implement persistent favorites storage</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Development Timeline</CardTitle>
          <CardDescription>Estimated schedule for feature completion</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2024</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Authentication for Favorites</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Implement secure user authentication system for the favorites feature on the /resources page.</p>
              <Badge variant="outline" className="text-blue-600 bg-blue-100">In Progress</Badge>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2024</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resource Category and Section Pages</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Complete the development of /resources/[category]/[subcategory] and /resources/[category]/[section] pages.</p>
              <Badge variant="outline" className="text-yellow-600 bg-yellow-100">Planned</Badge>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2024</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI-Powered Recommendations</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Implement AI-powered recommendations for the /hardware-catalog page to enhance user experience.</p>
              <Badge variant="outline" className="text-purple-600 bg-purple-100">Upcoming</Badge>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2024</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Favorites Management</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Develop a dedicated favorites page and implement persistent storage for user-saved resources.</p>
              <Badge variant="outline" className="text-green-600 bg-green-100">Scheduled</Badge>
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Update Schedule</CardTitle>
          <CardDescription>Regular update and maintenance schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CalendarDays className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Weekly Code Reviews</h4>
                <p className="text-sm text-gray-600">Every Friday at 2:00 PM UTC</p>
              </div>
            </li>
            <li className="flex items-start">
              <CalendarDays className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Bi-weekly Progress Updates</h4>
                <p className="text-sm text-gray-600">Every other Monday at 10:00 AM UTC</p>
              </div>
            </li>
            <li className="flex items-start">
              <CalendarDays className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Monthly Feature Deployment</h4>
                <p className="text-sm text-gray-600">Last Thursday of each month</p>
              </div>
            </li>
            <li className="flex items-start">
              <CalendarDays className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Quarterly Roadmap Review</h4>
                <p className="text-sm text-gray-600">First week of each quarter</p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

