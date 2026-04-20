import { LayoutDashboard, Users, Calendar, DollarSign, FileText, Settings, UserPlus, LogOut, CheckCircle2 } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] flex text-[10px] sm:text-[11px] text-gray-700 font-sans select-none overflow-hidden xl:text-xs">
      {/* Sidebar - Hidden on smallest screens */}
      <div className="hidden sm:flex w-48 border-r border-gray-200 flex-col h-full bg-white shrink-0">
        {/* Logo */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-2">
          <div className="font-bold text-gray-900 text-sm flex items-center gap-2">
             <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-serif italic font-bold">
               A
             </div>
             Arte Mental
          </div>
        </div>
        
        {/* Nav */}
        <div className="p-3 space-y-1 flex-1 overflow-hidden">
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={Users} label="Pacientes" />
          <NavItem icon={Calendar} label="Agenda" />
          <NavItem icon={DollarSign} label="Financeiro" />
          <NavItem icon={FileText} label="Emitir NFS-e" />
          <NavItem icon={UserPlus} label="Equipe" />
          <NavItem icon={Settings} label="Configurações" />
        </div>

        {/* Profile */}
        <div className="mt-auto p-4 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <img 
               src="https://images.unsplash.com/photo-1612349317150-e410f624c427?w=100&h=100&fit=crop&crop=faces" 
               alt="Avatar" 
               className="w-8 h-8 rounded-full border border-gray-200 object-cover" 
               referrerPolicy="no-referrer"
            />
            <div>
              <div className="font-bold text-gray-900 leading-tight">Geisson Oleques</div>
              <div className="text-[10px] text-gray-500">Psicologia Clínica</div>
            </div>
          </div>
          <div className="bg-emerald-50 text-emerald-600 text-[10px] py-1.5 px-2 rounded-md flex items-center gap-1.5 mb-3 font-medium border border-emerald-100">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Google Conectado
          </div>
          <div className="text-red-500 flex items-center justify-center border border-red-200 rounded-md bg-white gap-1.5 cursor-pointer py-1.5 hover:bg-red-50 transition-colors">
             <LogOut className="w-3.5 h-3.5" /> <span className="font-medium">Sair</span>
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC] z-10 overflow-y-auto">
        {/* Header */}
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
           <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-none mb-1">Visão Geral</h2>
              <p className="text-gray-500 text-xs">Bem-vindo de volta! Aqui está o resumo do seu consultório.</p>
           </div>
           <div className="flex gap-2">
               <button className="px-3 py-1.5 flex items-center gap-1.5 border border-gray-200 rounded-md text-gray-700 font-medium bg-white shadow-sm">
                 <FileText className="w-3.5 h-3.5" /> Exportar Relatório
               </button>
               <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md flex items-center gap-1.5 font-medium shadow-sm hover:bg-blue-700 transition-colors">
                 + Novo Paciente
               </button>
           </div>
        </div>

        {/* Dashboard Content */}
        <div className="px-4 sm:px-6 pb-6 flex flex-col gap-4">
          
          {/* 4 Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
             <StatCard 
               iconType={DollarSign}
               icon="text-green-500" bgColor="bg-green-50" 
               title="Faturamento Mensal" 
               value="R$ 12.550,00" 
               sub="+ R$ 6.700,00 a receber" 
               tag="-9.5%" tagColor="bg-red-100 text-red-600"
             />
             <StatCard 
               iconType={Calendar}
               icon="text-blue-500" bgColor="bg-blue-50" 
               title="Sessões Agendadas" 
               value="72" 
               sub="0 sessões hoje" 
               tag="Este Mês" tagColor="bg-blue-50 text-blue-600"
             />
             <StatCard 
               iconType={Users}
               icon="text-purple-500" bgColor="bg-purple-50" 
               title="Pacientes Ativos" 
               value="30" 
               sub="Total cadastrado" 
             />
             <StatCard 
               iconType={CheckCircle2}
               icon="text-orange-500" bgColor="bg-orange-50" 
               title="Horas Livres" 
               value="25h" 
               sub="Capacidade restante" 
               tag="Semana" tagColor="bg-orange-50 text-orange-600"
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Chart Area */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 lg:col-span-2 flex flex-col h-64">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  Histórico de Faturamento
                </h3>
                <div className="flex gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-gray-200"></div> Previsto</span>
                  <span className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-green-500"></div> Realizado</span>
                </div>
              </div>
              
              <div className="flex-1 flex items-end justify-between gap-2 pt-4 border-t border-gray-100">
                {[ 
                  { label: "Nov", prev: 50, real: 30 },
                  { label: "Dez", prev: 60, real: 40 },
                  { label: "Jan", prev: 70, real: 60 },
                  { label: "Fev", prev: 100, real: 90 },
                  { label: "Mar", prev: 95, real: 35 },
                  { label: "Abr", prev: 80, real: 5 }
                ].map((col, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end items-center gap-1 group">
                    <div className="w-full flex-1 flex flex-col justify-end items-center px-1">
                      <div className="w-full bg-gray-200 rounded-t-sm" style={{ height: `${col.prev}%`, position: 'relative' }}>
                        <div className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-t-sm transition-all duration-500" style={{ height: `${(col.real / col.prev) * 100}%` }}></div>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">{col.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Sessions */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col h-64">
              <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                <h3 className="font-bold text-gray-900 text-sm">Próximas Sessões</h3>
                <span className="text-gray-500 text-[10px] flex items-center cursor-pointer hover:text-blue-600">Ver Agenda →</span>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                <SessionRow day="20" month="ABR" name="Ana Carolina" time="11:00" price="R$ 220,00" />
                <SessionRow day="20" month="ABR" name="Carlos Mendes" time="13:00" price="R$ 240,00" />
                <SessionRow day="20" month="ABR" name="Mariana Silva" time="14:00" price="R$ 200,00" />
                <SessionRow day="20" month="ABR" name="João Pedro" time="15:00" price="R$ 200,00" />
                <SessionRow day="20" month="ABR" name="Juliana Costa" time="19:00" price="R$ 150,00" />
              </div>
              
              <button className="w-full mt-3 py-2 border border-blue-100 text-blue-600 font-medium rounded-md text-[11px] hover:bg-blue-50 transition-colors">
                Agendar Nova Sessão
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>
      <Icon className={`w-4 h-4 ${active ? 'text-blue-600' : 'text-gray-400'}`} />
      <span>{label}</span>
    </div>
  );
}

function StatCard({ iconType: IconComp, icon, bgColor, title, value, sub, tag, tagColor }: any) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
         <div className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center`}>
            <IconComp className={`w-4 h-4 ${icon}`} />
         </div>
         {tag && <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${tagColor}`}>{tag}</span>}
      </div>
      <div>
         <div className="text-gray-500 font-medium mb-0.5">{title}</div>
         <div className="text-lg font-bold text-gray-900">{value}</div>
         <div className="text-gray-400 text-[9px] mt-1">{sub}</div>
      </div>
    </div>
  )
}

function SessionRow({ day, month, name, time, price }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center justify-center p-1.5 bg-gray-50 border border-gray-100 rounded-md min-w-[36px]">
        <span className="text-[8px] text-gray-500 font-bold uppercase leading-none">{month}</span>
        <span className="text-gray-900 font-bold leading-none mt-0.5">{day}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-gray-900 truncate">{name}</div>
        <div className="text-gray-500 text-[9px] flex items-center gap-1 mt-0.5">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          {time}
        </div>
      </div>
      <div className="bg-yellow-50 text-yellow-700 font-medium px-1.5 py-0.5 rounded border border-yellow-100 text-[9px] whitespace-nowrap">
        {price}
      </div>
    </div>
  )
}
