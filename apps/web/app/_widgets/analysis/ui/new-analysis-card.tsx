import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@dismantled/ui/components/card";
import { Clock, Rocket } from "lucide-react";

export function NewAnalysisCard() {
  return (
    <Card className="from-primary/10 to-secondary/10 border-primary border-2 bg-gradient-to-r shadow-lg">
      <CardHeader className="py-4">
        <CardTitle className="text-primary flex items-center gap-2 text-xl font-black tracking-wide uppercase">
          <Rocket className="size-5 animate-pulse" />
          You&apos;re the First!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 py-4">
        <p className="text-sm leading-relaxed">
          You're the first person to check this text. Your request has been
          anchored on the Mantle blockchain and is now open for review by our
          community of experts.
        </p>

        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Clock className="size-4 animate-pulse" />
          <span className="font-mono">
            Community Validation: Pending votes...
          </span>
          <div className="flex space-x-1">
            <div className="bg-primary h-1 w-1 animate-pulse rounded-full"></div>
            <div className="bg-primary h-1 w-1 animate-pulse rounded-full delay-200"></div>
            <div className="bg-primary h-1 w-1 animate-pulse rounded-full delay-400"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
