import KanbanComponent from "@/components/kanban-board/KanbanComponent";

//grid grid-rows-[20px_1fr_20px]
export default function Home() {
  return (
    <main className="w-full h-screen">
      <KanbanComponent></KanbanComponent>
    </main>
  );
}
