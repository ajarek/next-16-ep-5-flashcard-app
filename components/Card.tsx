import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" 
const CardProgress = ({title, quantity, icon, bg_color}: {title: string, quantity: number, icon: React.ReactNode, bg_color: string}) => {
  return (
    <Card className="w-full grid grid-cols-[3fr_1fr] p-0 ">
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <p className="text-3xl font-bold">{quantity}</p>
      </CardHeader>
      <CardContent className={`${bg_color} h-28 w-full  flex items-center justify-center rounded-br-xl rounded-tr-xl `}>
        
            {icon}
        
      </CardContent>
    </Card>
  )
}

export default CardProgress