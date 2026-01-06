"use client";

import { Input } from "@/app/_components/ui/input";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "@/app/_components/ui/popover";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/app/_components/ui/select";
import { Search, Settings2 } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

interface FilterSectionPortfolioProps {
  search: string;
  setSearchAction: React.Dispatch<React.SetStateAction<string>>;
  selectedTags: string[];
  setSelectedTagsAction: React.Dispatch<React.SetStateAction<string[]>>;
  sortOrder: string;
  setSortOrderAction: React.Dispatch<React.SetStateAction<string>>;
  allTags: string[];
  selectedCategory: string;
  setSelectedCategoryAction: (category: string) => void;

}

export default function FilterSectionPortfolio({
  search,
  setSearchAction,
  selectedTags,
  setSelectedTagsAction,
  sortOrder,
  setSortOrderAction,
  allTags,
  selectedCategory,
  setSelectedCategoryAction
}: FilterSectionPortfolioProps) {

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCategoryClick = (cat: string) => {
    setSelectedCategoryAction(cat);

    const tagFromUrl = searchParams.get("tag");

    if (cat === "All" && tagFromUrl) {
      setSelectedTagsAction([]);
      setSearchAction("");
      router.replace("/portfolio"); // Nettoie l’URL en supprimant ?tag=
    }
  };

  const CATEGORIES = ["All", "Web", "Desktop", "DevOps"];

  const toggleTag = (tag: string) => {
    setSelectedTagsAction(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="w-full max-w-[1200px] p-4 sm:p-5 lg:p-6 rounded-2xl space-y-4 sm:space-y-5
      lg:space-y-6 bg-white border border-black/15 text-zinc-900 shadow-sm dark:bg-transparent dark:border-white/20 dark:text-white dark:shadow-lg">
      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 dark:text-zinc-400" />
          <Input value={search}
            onChange={(e) => setSearchAction(e.target.value)}
            placeholder="Rechercher un projet..."
            className="pl-10 bg-white border-black/20 text-zinc-900 placeholder:text-zinc-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-400 " />
        </div>
        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`transition-all
                ${selectedCategory === cat
                      ? `bg-black text-white dark:bg-white/10 dark:text-white border border-black dark:border-white/40`
                      : `bg-transparent border border-black/20 text-zinc-800 hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10`
                    }
              `}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
      {/* SECOND ROW */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-start sm:items-center">
        {/* Sort Select */}
        <Select value={sortOrder} onValueChange={setSortOrderAction}>
          <SelectTrigger className="w-full sm:w-[180px] bg-white border-black/20 text-zinc-900 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>

          <SelectContent className="min-w-[180px] bg-white border-black/20 text-zinc-900 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white">
            <SelectItem value="recent">Plus récents</SelectItem>
            <SelectItem value="oldest">Plus anciennes</SelectItem>
            <SelectItem value="alpha">Ordre alphabétique</SelectItem>
          </SelectContent>
        </Select>
        {/* Advanced Filters */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 border-black/20 text-zinc-800 hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10">
              <Settings2 className="w-4 h-4" />
              Filtres avancés
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 max-h-64 overflow-y-auto space-y-4 p-4 rounded-md bg-white border border-black/20 text-zinc-900 shadow-md dark:bg-zinc-900 dark:border-zinc-700 dark:text-white dark:shadow-lg">
            <h4 className="font-semibold text-sm">Technologies</h4>
            <div className="space-y-2">
              {allTags.map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <Checkbox
                    id={tag}
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={() => toggleTag(tag)}
                  />
                  <label
                    htmlFor={tag}
                    className="text-sm text-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
