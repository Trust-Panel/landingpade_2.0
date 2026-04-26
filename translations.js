// ===== TRUSTPANEL - i18n (PT-BR / EN / ES) =====
const translations = {
  'pt-BR': {
    // Nav
    'nav.features': 'Recursos',
    'nav.how': 'Como Funciona',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contato',
    'nav.cta': 'Teste grátis agora',

    // Hero
    'hero.eyebrow': 'Plataforma corporativa • Certificados Digitais A1',
    'hero.title': 'Segurança institucional na gestão dos seus <em>certificados digitais</em>.',
    'hero.lede': 'A TrustPanel automatiza 100% do ciclo de vida dos certificados A1 da sua empresa — com criptografia bancária, alertas antecipados e controle granular de acesso. Zero certificados vencidos. Zero riscos operacionais.',
    'hero.ctaPrimary': 'Agendar Demonstração',
    'hero.ctaGhost': 'Como funciona',
    'hero.trust.lgpd': 'LGPD Compliant',
    'hero.trust.aes': 'AES-256',
    'hero.trust.backup': 'Backup Contínuo',
    'hero.card.activeLabel': 'Certificados Ativos',
    'hero.card.activeValue': '150 Monitorados',
    'hero.card.alertLabel': 'Alerta de Renovação',
    'hero.card.alertValue': 'Vence em 30d',
    'hero.card.alertPill': 'Auto',
    'hero.card.complianceLabel': 'Conformidade Geral',
    'hero.card.complianceValue': 'Seguros & Protegidos',

    // Metrics
    'metrics.m1': 'Certificados sob controle',
    'metrics.m2': 'Criptografia de padrão bancário',
    'metrics.m3': 'Monitoramento contínuo',
    'metrics.m4': 'Tempo de resposta comercial',

    // Showcase
    'showcase.eyebrow': 'A plataforma',
    'showcase.title': 'Um painel único para toda a gestão de certificados digitais.',
    'showcase.lede': 'Visão consolidada de status, vencimentos, usuários e auditoria — sem planilhas, sem e-mails perdidos.',
    'showcase.card1.label': 'Status',
    'showcase.card1.title': 'Visão instantânea',
    'showcase.card1.desc': 'Válidos, expirando, expirados e totais — em cartões claros, com semáforo de criticidade.',
    'showcase.card2.label': 'Certificados Recentes',
    'showcase.card2.title': 'Tabela operacional',
    'showcase.card2.desc': 'Tipo, emissor, validade e status de cada certificado, com filtros e exportação rápida.',
    'showcase.card3.label': 'Gestão',
    'showcase.card3.title': 'Clientes, usuários, grupos',
    'showcase.card3.desc': 'Organize por cliente, defina grupos e controle permissões a partir de um menu lateral único.',

    // Features
    'features.eyebrow': 'Recursos principais',
    'features.title': 'Tudo que o seu departamento de TI e Fiscal precisa — em uma plataforma só.',
    'features.lede': 'Infraestrutura projetada para empresas que não podem parar por causa de um certificado vencido ou vazado.',

    'feat1.tag': '01 — ALERTAS',
    'feat1.title': 'Alertas de vencimento e prazos de renovação',
    'feat1.desc': 'Notificações automáticas enviadas com antecedência configurável. Seu time renova no momento exato — nunca antes, nunca tarde demais.',
    'feat1.li1': 'Alertas personalizáveis por período (30/15/7 dias)',
    'feat1.li2': 'Notificações via e-mail, WhatsApp e Slack',
    'feat1.li3': 'Dashboard consolidado com linha do tempo',

    'feat2.tag': '02 — SEGURANÇA',
    'feat2.title': 'Uso seguro sem armazenamento local',
    'feat2.desc': 'O certificado nunca é baixado na máquina do colaborador. Toda operação acontece em ambiente isolado na nuvem, com rastreabilidade ponta-a-ponta.',
    'feat2.li1': 'Zero arquivos locais na máquina do usuário',
    'feat2.li2': 'Execução direta via app autenticado',
    'feat2.li3': 'Eliminação completa de risco de cópia',

    'feat3.tag': '03 — GOVERNANÇA',
    'feat3.title': 'Permissões por usuário e por grupo',
    'feat3.desc': 'Controle granular com princípio de menor privilégio. Defina quem pode ver, usar e gerenciar cada certificado por departamento, cargo ou projeto.',
    'feat3.li1': 'Grupos por área (Fiscal, Financeiro, Compras)',
    'feat3.li2': 'Níveis de acesso totalmente customizáveis',
    'feat3.li3': 'Integração com Active Directory / SSO',

    'feat4.tag': '04 — AUDITORIA',
    'feat4.title': 'Logs completos e restrição de acesso',
    'feat4.desc': 'Cada ação é registrada com identidade, timestamp e contexto. Você sabe quem acessou, de onde, quando e para qual finalidade.',
    'feat4.li1': 'Trilha de auditoria imutável',
    'feat4.li2': 'Restrição por IP, horário e dispositivo',
    'feat4.li3': 'Relatórios para conformidade e ISO',

    // Corporate
    'corp.eyebrow': '— Feito para empresas sérias',
    'corp.title': 'Quando o seu negócio depende de conformidade, o certificado digital não é detalhe.',
    'corp.desc': 'Um certificado vencido pode interromper a emissão de notas, bloquear processos judiciais, travar pagamentos e gerar multas tributárias significativas. A TrustPanel foi desenhada junto com equipes de Controladoria, TI e Jurídico de médias e grandes empresas para eliminar esse risco — sem adicionar atrito operacional.',
    'corp.quote': '"Migramos o controle de 80 certificados para a TrustPanel em duas semanas. Desde então, nunca mais tivemos um vencimento silencioso. A equipe fiscal recuperou o foco em estratégia."',
    'corp.who': 'Diretoria de TI — Grupo corporativo brasileiro',
    'corp.tag1': 'CEO • Gestão Executiva',
    'corp.tag2': 'Equipe Fiscal',
    'corp.tag3': 'Departamento Financeiro',

    // How
    'how.eyebrow': 'Como funciona',
    'how.title': 'Implementação em 5 etapas, sem consultoria paralela.',
    'how.lede': 'Onboarding guiado pela nossa equipe. Seu time opera com autonomia a partir do primeiro dia.',
    'step1.title': 'Administrador Principal',
    'step1.desc': 'Um usuário-chave (CEO, Diretor de TI, CFO ou Controller) é designado com perfil de administrador e passa a gerenciar toda a plataforma institucionalmente.',
    'step1.badge': 'Controle Total',
    'step2.title': 'Cadastro de Certificados',
    'step2.desc': 'O administrador carrega os certificados A1 na plataforma. O processamento acontece em ambiente criptografado AES-256, com os arquivos imediatamente isolados do resto da rede.',
    'step2.badge': 'Criptografia Bancária',
    'step3.title': 'Usuários & Grupos',
    'step3.desc': 'Crie colaboradores, organize por grupos departamentais (Financeiro, Fiscal, Jurídico, Compras) e defina de forma cirúrgica quais certificados cada grupo pode acessar.',
    'step3.badge': 'Acesso Mínimo Necessário',
    'step4.title': 'Instalação do Aplicativo',
    'step4.desc': 'Um app corporativo leve é instalado no computador do colaborador (Windows ou macOS). Distribuição via GPO ou MDM suportada para ambientes gerenciados.',
    'step4.badge': 'Windows & macOS',
    'step5.title': 'Login Seguro & Uso Controlado',
    'step5.desc': 'O colaborador autentica e o sistema libera apenas os certificados autorizados para o seu grupo. Sem downloads. Sem arquivos soltos. Sem chance de vazamento.',
    'step5.badge': 'Pronto para operar',

    'security.title': 'Segurança institucional por padrão',
    'security.desc': 'O colaborador nunca baixa o certificado. Tudo fica protegido na nuvem TrustPanel, com rastreabilidade total de cada operação.',
    'security.tag1': 'Sem downloads',
    'security.tag2': 'Log completo',
    'security.tag3': 'Auditável',

    // FAQ
    'faq.eyebrow': 'Perguntas frequentes',
    'faq.title': 'Tudo o que você precisa saber antes de decidir.',
    'faq.lede': 'Respostas diretas para as dúvidas mais comuns de diretores de TI, controladores e gestores fiscais.',
    'faq.q1': 'O que é a TrustPanel?',
    'faq.a1': 'Plataforma corporativa de gerenciamento de certificados digitais A1. Permite controlar, monitorar e organizar todos os certificados da empresa em um único painel, com alertas de vencimento, controle granular de acesso e trilha de auditoria completa.',
    'faq.q2': 'Meus certificados ficam seguros na plataforma?',
    'faq.a2': 'Sim. Utilizamos criptografia AES-256, o mesmo padrão usado por bancos e instituições financeiras. Os certificados nunca são baixados na máquina do colaborador e toda operação acontece na nuvem com rastreabilidade ponta-a-ponta.',
    'faq.q3': 'Como funciona o controle de acesso por grupos?',
    'faq.a3': 'Você cria grupos por área (Financeiro, Fiscal, Compras, Jurídico) e define exatamente quais certificados cada grupo pode acessar. Cada colaborador só enxerga o que foi autorizado — princípio de menor privilégio aplicado por padrão.',
    'faq.q4': 'Funciona em Windows e macOS?',
    'faq.a4': 'Sim. O aplicativo corporativo é compatível com Windows e macOS e pode ser distribuído via GPO, Intune ou MDM em ambientes gerenciados de TI.',
    'faq.q5': 'A plataforma está em conformidade com a LGPD?',
    'faq.a5': 'Sim. A TrustPanel foi desenvolvida em total conformidade com a Lei Geral de Proteção de Dados. Todos os dados são tratados com segurança, transparência e respeito à privacidade dos usuários, com contratos e DPAs disponíveis sob demanda.',

    // Contact
    'contact.eyebrow': '— Contato comercial',
    'contact.title': 'Transforme a gestão de certificados da sua empresa.',
    'contact.lede': 'Fale com nossa equipe e descubra em 30 minutos como reduzir risco operacional, eliminar multas e devolver tempo para o seu time.',
    'contact.email': 'E-mail',
    'contact.emailNote': 'Resposta em até 2h úteis',
    'contact.wa': 'WhatsApp comercial',
    'contact.waNote': 'Atendimento dedicado',
    'contact.hours': 'Horário institucional',
    'contact.hoursValue': 'Segunda a Sexta — 8h às 18h (Brasília)',
    'form.title': 'Solicite uma demonstração',
    'form.lede': 'Preencha e retornaremos em até 2 horas úteis.',
    'form.company': 'Empresa',
    'form.companyPh': 'Razão social',
    'form.name': 'Nome completo',
    'form.namePh': 'Seu nome',
    'form.email': 'E-mail corporativo',
    'form.emailPh': 'nome@empresa.com.br',
    'form.message': 'Mensagem',
    'form.messagePh': 'Conte-nos sobre o contexto da sua empresa...',
    'form.submit': 'Enviar via WhatsApp',
    'form.lgpd': 'Dados protegidos pela LGPD',

    // Footer
    'foot.tagline': 'A plataforma corporativa mais confiável para gerenciamento de certificados digitais A1 no Brasil.',
    'foot.product': 'Produto',
    'foot.company': 'Empresa',
    'foot.legal': 'Legal',
    'foot.partners': 'Parceiros',
    'foot.press': 'Imprensa',
    'foot.privacy': 'Política de Privacidade',
    'foot.terms': 'Termos de Uso',
    'foot.lgpd': 'LGPD',
    'foot.copy': '© 2026 TrustPanel. Todos os direitos reservados.',
    'foot.cnpj': 'CNPJ sob consulta'
  },

  'en': {
    'nav.features': 'Features',
    'nav.how': 'How it works',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Try it free now',

    'hero.eyebrow': 'Enterprise platform • A1 Digital Certificates',
    'hero.title': 'Institutional security for managing your <em>digital certificates</em>.',
    'hero.lede': 'TrustPanel automates 100% of your A1 certificate lifecycle — with bank-grade encryption, early alerts, and granular access control. Zero expired certificates. Zero operational risk.',
    'hero.ctaPrimary': 'Schedule a Demo',
    'hero.ctaGhost': 'How it works',
    'hero.trust.lgpd': 'LGPD Compliant',
    'hero.trust.aes': 'AES-256',
    'hero.trust.backup': 'Continuous Backup',
    'hero.card.activeLabel': 'Active Certificates',
    'hero.card.activeValue': '150 Monitored',
    'hero.card.alertLabel': 'Renewal Alert',
    'hero.card.alertValue': 'Expires in 30d',
    'hero.card.alertPill': 'Auto',
    'hero.card.complianceLabel': 'Overall Compliance',
    'hero.card.complianceValue': 'Secure & Protected',

    'metrics.m1': 'Certificates under control',
    'metrics.m2': 'Bank-grade encryption',
    'metrics.m3': 'Continuous monitoring',
    'metrics.m4': 'Sales response time',

    'showcase.eyebrow': 'The platform',
    'showcase.title': 'A single panel for all digital certificate management.',
    'showcase.lede': 'Consolidated view of status, expirations, users, and auditing — no spreadsheets, no lost emails.',
    'showcase.card1.label': 'Status',
    'showcase.card1.title': 'Instant overview',
    'showcase.card1.desc': 'Valid, expiring, expired and totals — clear cards with criticality semaphore.',
    'showcase.card2.label': 'Recent Certificates',
    'showcase.card2.title': 'Operational table',
    'showcase.card2.desc': 'Type, issuer, validity and status of each certificate, with filters and quick export.',
    'showcase.card3.label': 'Management',
    'showcase.card3.title': 'Clients, users, groups',
    'showcase.card3.desc': 'Organize by client, define groups and control permissions from a single sidebar.',

    'features.eyebrow': 'Core features',
    'features.title': 'Everything your IT and Tax department needs — in a single platform.',
    'features.lede': 'Infrastructure designed for companies that cannot stop because of an expired or leaked certificate.',

    'feat1.tag': '01 — ALERTS',
    'feat1.title': 'Expiration alerts and renewal deadlines',
    'feat1.desc': 'Automatic notifications sent with configurable lead time. Your team renews exactly on time — never early, never late.',
    'feat1.li1': 'Customizable alerts per period (30/15/7 days)',
    'feat1.li2': 'Notifications via email, WhatsApp and Slack',
    'feat1.li3': 'Consolidated dashboard with timeline',

    'feat2.tag': '02 — SECURITY',
    'feat2.title': 'Secure usage with no local storage',
    'feat2.desc': 'The certificate is never downloaded to the user device. All operations happen in an isolated cloud environment with end-to-end traceability.',
    'feat2.li1': 'Zero local files on user machines',
    'feat2.li2': 'Direct execution via authenticated app',
    'feat2.li3': 'Complete elimination of copy risk',

    'feat3.tag': '03 — GOVERNANCE',
    'feat3.title': 'Permissions by user and by group',
    'feat3.desc': 'Granular control with least-privilege principle. Define who can view, use and manage each certificate by department, role or project.',
    'feat3.li1': 'Groups by area (Tax, Finance, Procurement)',
    'feat3.li2': 'Fully customizable access levels',
    'feat3.li3': 'Active Directory / SSO integration',

    'feat4.tag': '04 — AUDIT',
    'feat4.title': 'Complete logs and access restriction',
    'feat4.desc': 'Every action is logged with identity, timestamp and context. You know who accessed, from where, when and for what purpose.',
    'feat4.li1': 'Immutable audit trail',
    'feat4.li2': 'Restriction by IP, time and device',
    'feat4.li3': 'Reports for compliance and ISO',

    'corp.eyebrow': '— Built for serious companies',
    'corp.title': 'When your business depends on compliance, the digital certificate is no detail.',
    'corp.desc': 'An expired certificate can stop invoicing, block legal proceedings, freeze payments and generate significant tax fines. TrustPanel was designed alongside Controllership, IT and Legal teams of mid-to-large companies to eliminate this risk — without adding operational friction.',
    'corp.quote': '"We migrated control of 80 certificates to TrustPanel in two weeks. Since then, we have never had a silent expiration. The tax team recovered focus on strategy."',
    'corp.who': 'IT Director — Brazilian corporate group',
    'corp.tag1': 'CEO • Executive Management',
    'corp.tag2': 'Tax Team',
    'corp.tag3': 'Finance Department',

    'how.eyebrow': 'How it works',
    'how.title': 'Implementation in 5 steps, with no parallel consulting.',
    'how.lede': 'Onboarding guided by our team. Your team operates autonomously from day one.',
    'step1.title': 'Main Administrator',
    'step1.desc': 'A key user (CEO, IT Director, CFO or Controller) is designated with administrator profile and manages the entire platform institutionally.',
    'step1.badge': 'Full Control',
    'step2.title': 'Certificate Registration',
    'step2.desc': 'The administrator uploads A1 certificates to the platform. Processing happens in an AES-256 encrypted environment, with files immediately isolated from the rest of the network.',
    'step2.badge': 'Bank-grade Encryption',
    'step3.title': 'Users & Groups',
    'step3.desc': 'Create employees, organize by department groups (Finance, Tax, Legal, Procurement) and surgically define which certificates each group can access.',
    'step3.badge': 'Minimum Necessary Access',
    'step4.title': 'App Installation',
    'step4.desc': 'A lightweight corporate app is installed on the employee\u2019s computer (Windows or macOS). Distribution via GPO or MDM supported for managed environments.',
    'step4.badge': 'Windows & macOS',
    'step5.title': 'Secure Login & Controlled Use',
    'step5.desc': 'The employee authenticates and the system releases only the certificates authorized for their group. No downloads. No loose files. No chance of leak.',
    'step5.badge': 'Ready to operate',

    'security.title': 'Institutional security by default',
    'security.desc': 'The employee never downloads the certificate. Everything stays protected in the TrustPanel cloud, with full traceability of every operation.',
    'security.tag1': 'No downloads',
    'security.tag2': 'Complete logs',
    'security.tag3': 'Auditable',

    'faq.eyebrow': 'Frequently asked questions',
    'faq.title': 'Everything you need to know before deciding.',
    'faq.lede': 'Direct answers to the most common questions from IT directors, controllers and tax managers.',
    'faq.q1': 'What is TrustPanel?',
    'faq.a1': 'Enterprise platform for managing A1 digital certificates. Allows you to control, monitor and organize all company certificates in a single panel, with expiration alerts, granular access control and complete audit trail.',
    'faq.q2': 'Are my certificates safe on the platform?',
    'faq.a2': 'Yes. We use AES-256 encryption, the same standard used by banks and financial institutions. Certificates are never downloaded to user devices and all operations happen in the cloud with end-to-end traceability.',
    'faq.q3': 'How does group access control work?',
    'faq.a3': 'You create groups by area (Finance, Tax, Procurement, Legal) and define exactly which certificates each group can access. Each employee only sees what was authorized — least-privilege principle applied by default.',
    'faq.q4': 'Does it work on Windows and macOS?',
    'faq.a4': 'Yes. The corporate app is compatible with Windows and macOS and can be distributed via GPO, Intune or MDM in managed IT environments.',
    'faq.q5': 'Is the platform compliant with LGPD?',
    'faq.a5': 'Yes. TrustPanel was developed in full compliance with the General Data Protection Law. All data is treated with security, transparency and respect for user privacy, with contracts and DPAs available on demand.',

    'contact.eyebrow': '— Sales contact',
    'contact.title': 'Transform your company\u2019s certificate management.',
    'contact.lede': 'Talk to our team and discover in 30 minutes how to reduce operational risk, eliminate fines and give time back to your team.',
    'contact.email': 'Email',
    'contact.emailNote': 'Reply within 2 business hours',
    'contact.wa': 'Sales WhatsApp',
    'contact.waNote': 'Dedicated support',
    'contact.hours': 'Business hours',
    'contact.hoursValue': 'Monday to Friday — 8am to 6pm (Brasília)',
    'form.title': 'Request a demonstration',
    'form.lede': 'Fill in and we\u2019ll get back within 2 business hours.',
    'form.company': 'Company',
    'form.companyPh': 'Legal name',
    'form.name': 'Full name',
    'form.namePh': 'Your name',
    'form.email': 'Corporate email',
    'form.emailPh': 'name@company.com',
    'form.message': 'Message',
    'form.messagePh': 'Tell us about your company\u2019s context...',
    'form.submit': 'Send via WhatsApp',
    'form.lgpd': 'Data protected by LGPD',

    'foot.tagline': 'The most reliable enterprise platform for A1 digital certificate management in Brazil.',
    'foot.product': 'Product',
    'foot.company': 'Company',
    'foot.legal': 'Legal',
    'foot.partners': 'Partners',
    'foot.press': 'Press',
    'foot.privacy': 'Privacy Policy',
    'foot.terms': 'Terms of Use',
    'foot.lgpd': 'LGPD',
    'foot.copy': '© 2026 TrustPanel. All rights reserved.',
    'foot.cnpj': 'CNPJ on request'
  },

  'es': {
    'nav.features': 'Recursos',
    'nav.how': 'Cómo funciona',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contacto',
    'nav.cta': 'Pruébalo gratis ahora',

    'hero.eyebrow': 'Plataforma corporativa • Certificados Digitales A1',
    'hero.title': 'Seguridad institucional para la gestión de sus <em>certificados digitales</em>.',
    'hero.lede': 'TrustPanel automatiza el 100% del ciclo de vida de los certificados A1 de su empresa — con cifrado bancario, alertas anticipadas y control de acceso granular. Cero certificados vencidos. Cero riesgos operativos.',
    'hero.ctaPrimary': 'Agendar Demostración',
    'hero.ctaGhost': 'Cómo funciona',
    'hero.trust.lgpd': 'Cumple LGPD',
    'hero.trust.aes': 'AES-256',
    'hero.trust.backup': 'Backup Continuo',
    'hero.card.activeLabel': 'Certificados Activos',
    'hero.card.activeValue': '150 Monitoreados',
    'hero.card.alertLabel': 'Alerta de Renovación',
    'hero.card.alertValue': 'Vence en 30d',
    'hero.card.alertPill': 'Auto',
    'hero.card.complianceLabel': 'Conformidad General',
    'hero.card.complianceValue': 'Seguros y Protegidos',

    'metrics.m1': 'Certificados bajo control',
    'metrics.m2': 'Cifrado de estándar bancario',
    'metrics.m3': 'Monitoreo continuo',
    'metrics.m4': 'Tiempo de respuesta comercial',

    'showcase.eyebrow': 'La plataforma',
    'showcase.title': 'Un panel único para toda la gestión de certificados digitales.',
    'showcase.lede': 'Vista consolidada de estado, vencimientos, usuarios y auditoría — sin hojas de cálculo, sin correos perdidos.',
    'showcase.card1.label': 'Estado',
    'showcase.card1.title': 'Vista instantánea',
    'showcase.card1.desc': 'Válidos, por vencer, vencidos y totales — en tarjetas claras, con semáforo de criticidad.',
    'showcase.card2.label': 'Certificados Recientes',
    'showcase.card2.title': 'Tabla operativa',
    'showcase.card2.desc': 'Tipo, emisor, validez y estado de cada certificado, con filtros y exportación rápida.',
    'showcase.card3.label': 'Gestión',
    'showcase.card3.title': 'Clientes, usuarios, grupos',
    'showcase.card3.desc': 'Organice por cliente, defina grupos y controle permisos desde un menú lateral único.',

    'features.eyebrow': 'Recursos principales',
    'features.title': 'Todo lo que su departamento de TI y Fiscal necesita — en una sola plataforma.',
    'features.lede': 'Infraestructura diseñada para empresas que no pueden detenerse por un certificado vencido o filtrado.',

    'feat1.tag': '01 — ALERTAS',
    'feat1.title': 'Alertas de vencimiento y plazos de renovación',
    'feat1.desc': 'Notificaciones automáticas enviadas con anticipación configurable. Su equipo renueva en el momento exacto — nunca antes, nunca tarde.',
    'feat1.li1': 'Alertas personalizables por período (30/15/7 días)',
    'feat1.li2': 'Notificaciones por correo, WhatsApp y Slack',
    'feat1.li3': 'Dashboard consolidado con línea de tiempo',

    'feat2.tag': '02 — SEGURIDAD',
    'feat2.title': 'Uso seguro sin almacenamiento local',
    'feat2.desc': 'El certificado nunca se descarga en la máquina del colaborador. Toda operación ocurre en un entorno aislado en la nube, con trazabilidad de extremo a extremo.',
    'feat2.li1': 'Cero archivos locales en la máquina del usuario',
    'feat2.li2': 'Ejecución directa vía app autenticada',
    'feat2.li3': 'Eliminación completa del riesgo de copia',

    'feat3.tag': '03 — GOBERNANZA',
    'feat3.title': 'Permisos por usuario y por grupo',
    'feat3.desc': 'Control granular con principio de menor privilegio. Defina quién puede ver, usar y gestionar cada certificado por departamento, cargo o proyecto.',
    'feat3.li1': 'Grupos por área (Fiscal, Financiero, Compras)',
    'feat3.li2': 'Niveles de acceso totalmente personalizables',
    'feat3.li3': 'Integración con Active Directory / SSO',

    'feat4.tag': '04 — AUDITORÍA',
    'feat4.title': 'Logs completos y restricción de acceso',
    'feat4.desc': 'Cada acción se registra con identidad, marca de tiempo y contexto. Usted sabe quién accedió, desde dónde, cuándo y para qué finalidad.',
    'feat4.li1': 'Trilla de auditoría inmutable',
    'feat4.li2': 'Restricción por IP, horario y dispositivo',
    'feat4.li3': 'Reportes para conformidad e ISO',

    'corp.eyebrow': '— Hecho para empresas serias',
    'corp.title': 'Cuando su negocio depende de la conformidad, el certificado digital no es un detalle.',
    'corp.desc': 'Un certificado vencido puede interrumpir la emisión de facturas, bloquear procesos judiciales, frenar pagos y generar multas tributarias significativas. TrustPanel fue diseñada junto con equipos de Contraloría, TI y Legal de empresas medianas y grandes para eliminar este riesgo — sin agregar fricción operativa.',
    'corp.quote': '"Migramos el control de 80 certificados a TrustPanel en dos semanas. Desde entonces, nunca más tuvimos un vencimiento silencioso. El equipo fiscal recuperó el foco en estrategia."',
    'corp.who': 'Dirección de TI — Grupo corporativo brasileño',
    'corp.tag1': 'CEO • Gestión Ejecutiva',
    'corp.tag2': 'Equipo Fiscal',
    'corp.tag3': 'Departamento Financiero',

    'how.eyebrow': 'Cómo funciona',
    'how.title': 'Implementación en 5 etapas, sin consultoría paralela.',
    'how.lede': 'Onboarding guiado por nuestro equipo. Su equipo opera con autonomía desde el primer día.',
    'step1.title': 'Administrador Principal',
    'step1.desc': 'Un usuario clave (CEO, Director de TI, CFO o Controller) es designado con perfil de administrador y gestiona toda la plataforma institucionalmente.',
    'step1.badge': 'Control Total',
    'step2.title': 'Registro de Certificados',
    'step2.desc': 'El administrador carga los certificados A1 en la plataforma. El procesamiento ocurre en un entorno cifrado AES-256, con los archivos inmediatamente aislados del resto de la red.',
    'step2.badge': 'Cifrado Bancario',
    'step3.title': 'Usuarios y Grupos',
    'step3.desc': 'Cree colaboradores, organice por grupos departamentales (Financiero, Fiscal, Legal, Compras) y defina con precisión qué certificados puede acceder cada grupo.',
    'step3.badge': 'Acceso Mínimo Necesario',
    'step4.title': 'Instalación de la Aplicación',
    'step4.desc': 'Una app corporativa ligera se instala en la computadora del colaborador (Windows o macOS). Distribución vía GPO o MDM compatible con entornos gestionados.',
    'step4.badge': 'Windows y macOS',
    'step5.title': 'Login Seguro y Uso Controlado',
    'step5.desc': 'El colaborador se autentica y el sistema libera solo los certificados autorizados para su grupo. Sin descargas. Sin archivos sueltos. Sin posibilidad de filtración.',
    'step5.badge': 'Listo para operar',

    'security.title': 'Seguridad institucional por defecto',
    'security.desc': 'El colaborador nunca descarga el certificado. Todo queda protegido en la nube TrustPanel, con trazabilidad total de cada operación.',
    'security.tag1': 'Sin descargas',
    'security.tag2': 'Log completo',
    'security.tag3': 'Auditable',

    'faq.eyebrow': 'Preguntas frecuentes',
    'faq.title': 'Todo lo que necesita saber antes de decidir.',
    'faq.lede': 'Respuestas directas a las dudas más comunes de directores de TI, controladores y gerentes fiscales.',
    'faq.q1': '¿Qué es TrustPanel?',
    'faq.a1': 'Plataforma corporativa de gestión de certificados digitales A1. Permite controlar, monitorear y organizar todos los certificados de la empresa en un único panel, con alertas de vencimiento, control granular de acceso y trilla de auditoría completa.',
    'faq.q2': '¿Mis certificados están seguros en la plataforma?',
    'faq.a2': 'Sí. Utilizamos cifrado AES-256, el mismo estándar usado por bancos e instituciones financieras. Los certificados nunca se descargan en la máquina del colaborador y toda operación ocurre en la nube con trazabilidad de extremo a extremo.',
    'faq.q3': '¿Cómo funciona el control de acceso por grupos?',
    'faq.a3': 'Usted crea grupos por área (Financiero, Fiscal, Compras, Legal) y define exactamente qué certificados puede acceder cada grupo. Cada colaborador solo ve lo que fue autorizado — principio de menor privilegio aplicado por defecto.',
    'faq.q4': '¿Funciona en Windows y macOS?',
    'faq.a4': 'Sí. La aplicación corporativa es compatible con Windows y macOS y puede distribuirse vía GPO, Intune o MDM en entornos gestionados de TI.',
    'faq.q5': '¿La plataforma cumple con la LGPD?',
    'faq.a5': 'Sí. TrustPanel fue desarrollada en total conformidad con la Ley General de Protección de Datos. Todos los datos se tratan con seguridad, transparencia y respeto a la privacidad de los usuarios, con contratos y DPAs disponibles bajo demanda.',

    'contact.eyebrow': '— Contacto comercial',
    'contact.title': 'Transforme la gestión de certificados de su empresa.',
    'contact.lede': 'Hable con nuestro equipo y descubra en 30 minutos cómo reducir el riesgo operativo, eliminar multas y devolver tiempo a su equipo.',
    'contact.email': 'Correo electrónico',
    'contact.emailNote': 'Respuesta en hasta 2h hábiles',
    'contact.wa': 'WhatsApp comercial',
    'contact.waNote': 'Atención dedicada',
    'contact.hours': 'Horario institucional',
    'contact.hoursValue': 'Lunes a Viernes — 8h a 18h (Brasília)',
    'form.title': 'Solicite una demostración',
    'form.lede': 'Complete y volveremos en hasta 2 horas hábiles.',
    'form.company': 'Empresa',
    'form.companyPh': 'Razón social',
    'form.name': 'Nombre completo',
    'form.namePh': 'Su nombre',
    'form.email': 'Correo corporativo',
    'form.emailPh': 'nombre@empresa.com',
    'form.message': 'Mensaje',
    'form.messagePh': 'Cuéntenos sobre el contexto de su empresa...',
    'form.submit': 'Enviar por WhatsApp',
    'form.lgpd': 'Datos protegidos por LGPD',

    'foot.tagline': 'La plataforma corporativa más confiable para la gestión de certificados digitales A1 en Brasil.',
    'foot.product': 'Producto',
    'foot.company': 'Empresa',
    'foot.legal': 'Legal',
    'foot.partners': 'Socios',
    'foot.press': 'Prensa',
    'foot.privacy': 'Política de Privacidad',
    'foot.terms': 'Términos de Uso',
    'foot.lgpd': 'LGPD',
    'foot.copy': '© 2026 TrustPanel. Todos los derechos reservados.',
    'foot.cnpj': 'CNPJ bajo consulta'
  }
};

// ===== Apply translations =====
(function () {
  const LANG_KEY = 'tp_lang';
  const LANG_TO_HTML = { 'pt-BR': 'pt-BR', 'en': 'en', 'es': 'es' };
  const LOCALE_LABELS = { 'pt-BR': 'BR', 'en': 'EN', 'es': 'ES' };

  function getInitialLang() {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored && translations[stored]) return stored;
    const nav = (navigator.language || 'pt-BR').toLowerCase();
    if (nav.startsWith('es')) return 'es';
    if (nav.startsWith('en')) return 'en';
    return 'pt-BR';
  }

  function applyLang(lang) {
    const dict = translations[lang] || translations['pt-BR'];
    document.documentElement.lang = LANG_TO_HTML[lang] || 'pt-BR';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('.locale span[data-lang]').forEach((s) => {
      s.classList.toggle('active', s.getAttribute('data-lang') === lang);
    });

    localStorage.setItem(LANG_KEY, lang);
  }

  function init() {
    document.querySelectorAll('.locale span[data-lang]').forEach((s) => {
      const lang = s.getAttribute('data-lang');
      if (LOCALE_LABELS[lang]) s.textContent = LOCALE_LABELS[lang];
      s.addEventListener('click', () => applyLang(lang));
    });
    applyLang(getInitialLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
