"use client";

import { Input } from "@/app/_components/ui/input";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "@/app/_components/ui/popover";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/app/_components/ui/select";
import { Search, Settings2 } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation"; // pour App Router

interface FilterSectionPortfolioProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  allTags: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;

}

export default function FilterSectionPortfolio({
  search,
  setSearch,
  selectedTags,
  setSelectedTags,
  sortOrder,
  setSortOrder,
  allTags,
  selectedCategory,
  setSelectedCategory
}: FilterSectionPortfolioProps) {

  const router = useRouter();

  const handleReset = () => {
    setSelectedCategory("");
    setSelectedTags([]);
    setSearch(""); 
    router.push("/Portfolio");
  };

  const CATEGORIES = ["All", "Frontend", "Backend", "Desktop", "DevOps"];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="w-full max-w-[1200px] border border-white/20 text-white p-6 rounded-2xl shadow-lg space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un projet..."
            className="pl-10 bg-zinc-800 border-zinc-700 text-white"
          />
        </div>

        <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(cat => (
          <Button key={cat} variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
            className={`text-white border-white/20 hover:bg-white/10 ${
              selectedCategory === cat ? 'bg-white/10 border-white/40' : ''
            } focus:outline-none focus:ring-0 active:outline-none`}
            >
            {cat}
          </Button>
        ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        {/* Select */}
        <Select value={sortOrder} onValueChange={setSortOrder}>
          <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700 text-white">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 text-white border-zinc-700 min-w-[180px]">
            <SelectItem value="recent">Plus récents</SelectItem>
            <SelectItem value="oldest">Plus anciennes</SelectItem>
            <SelectItem value="alpha">Ordre alphabétique</SelectItem>
          </SelectContent>
        </Select>

        {/* Tags/Checkboxes in Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="text-white border-white/20 flex items-center gap-2">
              <Settings2 className="w-4 h-4" />
              Filtres avancés
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-zinc-900 border-zinc-700 text-white w-64 max-h-64 overflow-y-auto space-y-4 p-4 rounded-md shadow-lg">
            <h4 className="font-semibold text-sm">Technologies</h4>
            <div className="space-y-2">
              {allTags.map(tag => (
                <div key={tag} className="flex items-center gap-2">
                  <Checkbox
                    id={tag}
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={() => toggleTag(tag)}
                    
                  />
                  <label htmlFor={tag} className="text-sm">{tag}</label>
                  
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Button
          variant="destructive"
          onClick={handleReset}
          className="text-white border-red-500 hover:bg-red-600 hover:text-white">
          Réinitialiser les filtres
        </Button>

      </div>
    </div>
  );
}
