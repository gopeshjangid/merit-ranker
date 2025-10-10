import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { usePresentationState } from '@/states/presentation-state';
import { Globe } from 'lucide-react';

export function WebSearchToggle() {
  const { webSearchEnabled, setWebSearchEnabled, isGeneratingOutline } =
    usePresentationState();

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background/95 px-3.5 py-2 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
      <div className="flex items-center gap-2">
        <Globe
          className={`h-3.5 w-3.5 transition-colors ${webSearchEnabled ? 'text-primary' : 'text-muted-foreground'}`}
        />
        <Label
          htmlFor="web-search-toggle"
          className="cursor-pointer text-xs leading-none font-medium text-foreground select-none"
        >
          Web Search
        </Label>
      </div>
      <Switch
        id="web-search-toggle"
        checked={webSearchEnabled}
        onCheckedChange={setWebSearchEnabled}
        disabled={isGeneratingOutline}
      />
    </div>
  );
}
