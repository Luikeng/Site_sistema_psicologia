import { LayoutDashboard, Users, Calendar, DollarSign, FileText, Settings, UserPlus, Plus, RefreshCw, LogOut, Check } from "lucide-react";

export function AgendaMockup() {
  const hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  
  return (
    <div className="w-full h-full bg-white flex text-[10px] text-gray-700 font-sans select-none overflow-hidden">
      {/* Sidebar - Hidden on smallest screens */}
      <div className="hidden sm:flex w-40 border-r border-gray-200 flex-col h-full bg-[#FAFAFA] shrink-0">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 flex items-center gap-2">
          <div className="font-bold text-gray-800 text-sm flex items-center gap-1">
             <div className="w-5 h-5 rounded overflow-hidden flex items-center justify-center">
                <span className="text-xl font-thin text-brand-indigo -ml-1">S</span>
             </div>
             Sistema Psi
          </div>
        </div>
        
        {/* Nav */}
        <div className="p-3 space-y-1 flex-1 overflow-hidden">
          <NavItem icon={LayoutDashboard} label="Dashboard" />
          <NavItem icon={Users} label="Pacientes" />
          <NavItem icon={Calendar} label="Agenda" active />
          <NavItem icon={DollarSign} label="Financeiro" />
          <NavItem icon={FileText} label="Emitir NFS-e" />
          <NavItem icon={UserPlus} label="Equipe" />
          <NavItem icon={Settings} label="Configurações" />
        </div>

        {/* Profile */}
        <div className="mt-auto p-3 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <img 
               src="https://images.unsplash.com/photo-1612349317150-e410f624c427?w=100&h=100&fit=crop&crop=faces" 
               alt="Avatar" 
               className="w-7 h-7 rounded-full border border-gray-200" 
            />
            <div>
              <div className="font-bold text-gray-900 text-[11px]">Dr. Marcos Silva</div>
              <div className="text-[9px] text-gray-500">Psicologia Clínica</div>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[9px] py-1 px-1.5 rounded flex items-center justify-center gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Google Conectado
          </div>
          <div className="text-red-500 flex items-center justify-center border border-red-100 rounded bg-red-50 gap-1 cursor-pointer py-1.5 hover:bg-red-100 transition-colors">
             <LogOut className="w-3 h-3" /> <span className="font-medium">Sair</span>
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white shadow-[-4px_0_15px_rgba(0,0,0,0.03)] z-10">
        {/* Header */}
        <div className="h-14 border-b border-gray-200 flex items-center justify-between px-5 shrink-0">
           <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold text-gray-900 leading-none">Agenda</h2>
              <div className="flex gap-2 text-[10px]">
                 <div className="px-2 py-0.5 bg-white border-b-2 border-brand-blue text-brand-blue font-semibold">Semanal</div>
                 <div className="px-2 py-0.5 text-gray-500 hover:text-gray-700">Mensal</div>
              </div>
           </div>
           <div className="flex gap-3">
               <button className="px-3 py-1 flex items-center gap-1 border border-gray-200 rounded-md text-gray-700 font-medium">
                 <Calendar className="w-3 h-3" /> Hoje
               </button>
               <button className="w-7 h-7 bg-brand-blue text-white rounded-md flex items-center justify-center hover:bg-blue-800 transition-colors shadow-sm">
                 <Plus className="w-4 h-4" />
               </button>
           </div>
        </div>

        {/* Controls */}
        <div className="p-2 border-b border-gray-200 flex items-center gap-2 bg-gray-50/50 overflow-x-auto scrollbar-hide shrink-0">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-gray-700 bg-white rounded shadow-sm hover:bg-gray-50 whitespace-nowrap">
            <Users className="w-3.5 h-3.5 text-gray-400" /> Profissionais
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-gray-700 bg-white rounded shadow-sm hover:bg-gray-50 whitespace-nowrap">
            <RefreshCw className="w-3 h-3 text-gray-400" /> Sincronizar
          </button>
          <button className="p-1.5 border border-gray-200 text-gray-700 bg-white rounded shadow-sm hover:bg-gray-50 shrink-0">
            <Settings className="w-3.5 h-3.5 text-gray-400" />
          </button>
          
          <div className="flex-1 flex justify-center font-bold text-gray-900 text-xs whitespace-nowrap px-4">
             Abril De 2026
          </div>
          
          <div className="hidden sm:block w-[180px]"></div> {/* Spacer for balance */}
        </div>

        {/* Calendar GridWrapper */}
        <div className="flex-1 overflow-hidden relative flex flex-col">
          {/* Days Header */}
          <div className="flex border-b border-gray-200 h-10 shrink-0 bg-white">
            <div className="w-10 border-r border-gray-200 shrink-0"></div>
            {['Dom 12', 'Seg 13', 'Ter 14', 'Qua 15', 'Qui 16', 'Sex 17', 'Sáb 18'].map((day, i) => (
               <div key={i} className="flex-1 border-r border-gray-100 flex flex-col items-center justify-center">
                  <span className="text-[9px] uppercase text-gray-500 font-medium mb-0.5">{day.split(' ')[0]}</span>
                  <span className={`text-[11px] font-bold ${i === 5 ? "w-5 h-5 bg-brand-blue text-white flex items-center justify-center rounded-full" : "text-gray-800"}`}>
                    {day.split(' ')[1]}
                  </span>
               </div>
            ))}
          </div>
          
          {/* Grid Body */}
          <div className="flex-1 relative overflow-hidden bg-white overflow-x-auto overflow-y-auto">
             <div className="min-w-[500px] sm:min-w-0 h-[400px] relative">
               {/* Y-Axis Time Labels */}
               <div className="absolute top-0 left-0 bottom-0 w-10 border-r border-gray-200 flex flex-col z-10 bg-white">
                  {hours.map(h => (
                     <div key={h} className="h-10 border-b border-gray-100 flex items-start justify-center pt-1 text-[9px] text-gray-400 font-medium">
                        {h}:00
                     </div>
                  ))}
               </div>
               
               {/* Grid lines horizontal */}
               <div className="absolute top-0 left-10 right-0 bottom-0 flex flex-col pointer-events-none">
                  {hours.map(h => (
                     <div key={h} className="h-10 border-b border-gray-50 w-full"></div>
                  ))}
               </div>
               
               {/* Grid lines vertical */}
               <div className="absolute top-0 left-10 right-0 bottom-0 flex pointer-events-none">
                  {[1, 2, 3, 4, 5, 6, 7].map(c => (
                     <div key={c} className="flex-1 border-r border-gray-50 h-full"></div>
                  ))}
               </div>
               
               {/* Events Wrapper */}
               <div className="absolute top-0 left-10 right-0 bottom-0">
                  {/* 
                     Row height = 40px (1 hour)
                     Start hour = 7:00
                     Columns = 7
                  */}
                  <EventBlock day={2} hour={10} name="Ana Clara Silva" type="confirmed" />
                  <EventBlock day={3} hour={10} name="Eduardo Costa" type="pending" />
                  <EventBlock day={3} hour={11} name="Manuela Rocha" type="confirmed" />
                  <EventBlock day={4} hour={11} name="Lucas Martins" type="confirmed" />
                  
                  <EventBlock day={1} hour={13} name="Beatriz Souza" type="pending" />
                  <EventBlock day={2} hour={13} name="João Gabriel" type="confirmed" />
                  <EventBlock day={5} hour={13} name="Fernando Alves" type="confirmed" />
                  
                  <EventBlock day={1} hour={14} name="Marcelo Rossi" type="confirmed" />
                  <EventBlock day={5} hour={14} name="Rafael Almeida" type="pending" />
                  
                  <EventBlock day={1} hour={15} name="Sônia Machado" type="pending" />
                  <EventBlock day={3} hour={15} name="Fernanda Lima" type="confirmed" />
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer ${active ? 'bg-brand-blue/5 text-brand-blue font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
      <Icon className={`w-4 h-4 ${active ? 'text-brand-blue' : 'text-gray-400'}`} />
      <span>{label}</span>
    </div>
  );
}

function EventBlock({ day, hour, name, type }: { day: number, hour: number, name: string, type: 'confirmed' | 'pending' }) {
  const topOffset = (hour - 7) * 40; // 7:00 is top 0, each hour is 40px
  const leftPct = (day / 7) * 100;
  const leftOffset = `calc(${leftPct}% + 4px)`;
  const width = `calc(${100 / 7}% - 8px)`;
  
  const colors = type === 'confirmed' 
    ? 'bg-emerald-100/70 border-emerald-200 text-emerald-800' 
    : 'bg-orange-100/70 border-orange-200 text-orange-800';
    
  return (
    <div 
      className={`absolute rounded block border p-1.5 shadow-sm overflow-hidden backdrop-blur-sm ${colors}`}
      style={{ top: topOffset + 2, left: leftOffset, width, height: 36 }}
    >
       <div className="flex justify-between items-start">
         <span className="font-bold truncate text-[10px] pr-1 leading-tight">{name}</span>
         {type === 'confirmed' && <Check className="w-3 h-3 shrink-0 opacity-80" />}
       </div>
       <div className="text-[8px] opacity-80 font-medium">{hour}:00 - {hour}:50</div>
    </div>
  );
}
