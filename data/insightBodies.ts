// data/insightBodies.ts
// Full HTML body for each article, keyed by slug

export const INSIGHT_BODIES: Record<string, string> = {
  "why-enterprise-ai-projects-fail": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">Most enterprise AI projects don't fail because the technology doesn't work. They fail because organisations treat AI as a technology project when it is, at its core, a business transformation project. After working through dozens of engagements across financial services, manufacturing, healthcare and retail, four failure patterns appear again and again — and none of them are technical.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Pattern 1: The Pilot Trap</h2>
<p class="body-md" style="margin-bottom:16px;">The pattern is familiar. A small team spins up an AI pilot in six weeks. The demo impresses the C-suite. Leadership approves a broader initiative. And then, six to twelve months later, nothing is in production. The pilot lives in a sandbox. A governance committee debates data access. The original team has moved on.</p>
<p class="body-md" style="margin-bottom:24px;">The problem is that most AI pilots are designed to demonstrate technical capability rather than to solve a specific, high-priority business problem with a clear owner, a committed budget, and a defined path to deployment. Pilots optimised for applause almost never reach production. Pilots optimised for a specific business outcome almost always do.</p>

<div style="background:var(--surface);border-left:3px solid var(--purple);border-radius:0 var(--r-md) var(--r-md) 0;padding:20px 24px;margin:32px 0;">
  <p class="body-md" style="color:var(--ink-mid);font-style:italic;">"The question that determines whether an AI pilot reaches production is not 'does it work?' — it's 'who owns taking this to production, and what does their success metric look like on day ninety of deployment?'"</p>
</div>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Pattern 2: Data Debt Discovered Too Late</h2>
<p class="body-md" style="margin-bottom:16px;">The second pattern is almost universal: organisations discover the state of their data after they've already committed to building an AI system on top of it. This is expensive. Reworking data infrastructure mid-build cascades into feature rework, model retraining, timeline overruns, and frequently a complete loss of stakeholder confidence.</p>
<p class="body-md" style="margin-bottom:24px;">The fix is uncomfortable because it's slow: a rigorous data audit before the project scoping is complete. Document what data exists, where it lives, who owns it, how trustworthy it is, and what governance processes need to change. Teams that invest the first fifteen percent of their budget here complete the overall project forty percent faster.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Pattern 3: Wrong Problem, Right Technology</h2>
<p class="body-md" style="margin-bottom:16px;">The third pattern is subtler: teams choose their AI use case based on what's technically interesting rather than what's strategically valuable. LLMs are fascinating. Computer vision is impressive. Recommendation engines are well-understood. None of these are good reasons to build them.</p>
<p class="body-md" style="margin-bottom:24px;">The AI use cases that deliver measurable business value almost always start from a different direction: a decision that takes too long, a process that costs too much, a customer behaviour that's poorly understood. Start there. Then ask whether AI is the right tool.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Pattern 4: Adoption as an Afterthought</h2>
<p class="body-md" style="margin-bottom:16px;">The fourth pattern kills the most otherwise-successful AI projects: adoption is treated as a communication task at the end of the project rather than a design constraint throughout it. A message goes out announcing the new tool. Training sessions are scheduled. And then, three months post-launch, usage data shows that eighty percent of intended users are not using it.</p>
<p class="body-md" style="margin-bottom:32px;">Real adoption starts in the discovery phase. The people who will use the AI system need to be involved in defining what it does, how it presents its outputs, and how it fits into their existing workflow.</p>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:28px 32px;border-left:4px solid var(--purple);">
  <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:var(--ink);margin-bottom:10px;">Working with Vyuhon</div>
  <p class="body-md">Every Vyuhon AI engagement starts with what we call a readiness sprint — three to four weeks of structured discovery across business, data, people, and technology. It's the work that determines whether what comes next actually reaches production.</p>
</div>`,

  "building-rag-systems": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">Retrieval-Augmented Generation has become the default pattern for enterprise AI — and with good reason. But most enterprise RAG deployments underperform significantly, and in almost every case, the problem isn't the language model. It's the retrieval layer.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Why Retrieval Is the Hard Problem</h2>
<p class="body-md" style="margin-bottom:16px;">A language model can only reason about the context it's given. If you give it the wrong context — content that contains relevant keywords but not relevant meaning — it will either hallucinate the answer it expects to find, or produce a response that's technically grounded in the retrieved text but practically incorrect.</p>
<p class="body-md" style="margin-bottom:24px;">The most common retrieval failure mode: fixed-size chunking that breaks documents at arbitrary character limits. The second: embedding models trained on general text that perform poorly on domain-specific terminology. The third: no query preprocessing, so the raw user query hits the vector store directly.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Hierarchical Chunking</h2>
<p class="body-md" style="margin-bottom:24px;">Replace fixed-size chunking with structure-aware chunking. Preserve document hierarchy: section headers, subsections, paragraph boundaries. A paragraph from the "Exceptions" section of a policy document means something completely different from the same paragraph in "General Rules" — and flat chunking loses that context entirely.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Query Rewriting and Expansion</h2>
<p class="body-md" style="margin-bottom:24px;">Before sending a user query to your vector store, process it. At minimum, use the conversation history to rewrite an ambiguous query into a more complete one. "What's the limit?" becomes "What is the annual claim limit under policy type B for employees hired after 2022?" The retrieval precision improvement is significant.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Re-ranking After Retrieval</h2>
<p class="body-md" style="margin-bottom:24px;">Bi-encoder embedding models optimise for retrieval speed, not relevance precision. After retrieving your top-k candidates, use a cross-encoder re-ranker to score each candidate against the original query. In our experience, adding a re-ranking step improves end-to-end accuracy by fifteen to twenty-five percent with no changes to the underlying model.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Evaluate Retrieval Independently</h2>
<p class="body-md" style="margin-bottom:32px;">Build a test set of questions with known correct answer locations in your document corpus. Measure precision@k and recall@k for your retrieval layer independently of the LLM output. If your retrieval precision is sixty percent, no amount of prompt engineering will get you to ninety percent end-to-end accuracy.</p>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:28px 32px;border-left:4px solid var(--teal);">
  <p class="body-md">Structure-aware chunking, query rewriting, and re-ranking are not optional optimisations for enterprise RAG — they are the baseline. Fix the retrieval first. The rest gets easier.</p>
</div>`,

  "product-manager-guide-ai-features": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">AI features break almost every rule that product managers have learned to rely on. You can't fully specify them upfront because their behaviour is probabilistic. You can't unit-test them to a pass/fail threshold. Their performance drifts over time without any code changes.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Redefining Done</h2>
<p class="body-md" style="margin-bottom:16px;">For conventional software features, "done" is binary: the feature does what the spec says. For AI features, "done" is a moving target. Model performance changes as the underlying model is updated. Data distributions shift as user behaviour evolves.</p>
<p class="body-md" style="margin-bottom:24px;">This means the definition of "done" for an AI feature has to include an ongoing monitoring commitment, not just a QA pass before launch. Before you ship an AI feature, you need to know: what metric tells us it's working? Who is responsible for monitoring it? What's the threshold at which we pull the feature?</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Setting Expectations That Don't Backfire</h2>
<p class="body-md" style="margin-bottom:24px;">The most effective framing we've seen in user research consistently positions AI features as tools that assist, not tools that decide. "Here are three suggested responses — choose the one that fits" dramatically outperforms "The AI will write your response automatically" — even when the underlying AI output is identical.</p>

<div style="background:var(--surface);border-left:3px solid var(--blue);border-radius:0 var(--r-md) var(--r-md) 0;padding:20px 24px;margin:32px 0;">
  <p class="body-md" style="color:var(--ink-mid);font-style:italic;">"Frame your AI feature as a tool that assists, not a tool that decides. The user's sense of control determines whether they trust it — not the model's accuracy rate."</p>
</div>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">The Metrics That Actually Matter</h2>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Task completion rate.</strong> Does the user actually accomplish their goal faster with the AI feature than without it?</p>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Override rate.</strong> How often do users reject the AI's output and do the task manually instead?</p>
<p class="body-md" style="margin-bottom:32px;"><strong style="color:var(--ink);">Trust calibration over time.</strong> Do users' trust levels become more accurate as they develop intuition for when the AI is reliable?</p>`,

  "designing-enterprise-ai-adoption": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">You can build the most accurate AI system in the world and still fail completely. Adoption is a design problem at least as much as it is a technology problem — and in enterprise contexts, it may be more so.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Why Enterprise Users Don't Adopt AI Tools</h2>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Lack of verifiability.</strong> When users can't understand why an AI produced a particular output, they can't evaluate whether to trust it.</p>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Accountability anxiety.</strong> In regulated industries especially, users worry about what happens if they act on a wrong AI recommendation.</p>
<p class="body-md" style="margin-bottom:24px;"><strong style="color:var(--ink);">Workflow disruption.</strong> AI tools that require users to leave their existing workflow create friction that outweighs perceived benefit.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Show the Reasoning</h2>
<p class="body-md" style="margin-bottom:24px;">Users trust AI outputs significantly more when they can see how the answer was derived — even when they can't fully evaluate the reasoning. Showing source documents, confidence indicators, or the factors that influenced a recommendation reduces the "black box" perception.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Make Disagreeing Easy</h2>
<p class="body-md" style="margin-bottom:24px;">If overriding the AI feels like a bureaucratic process, users will either comply with outputs they don't trust or avoid the tool entirely. The override mechanism should be one click, zero friction, and zero shame.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Rollout Sequence Matters</h2>
<p class="body-md" style="margin-bottom:32px;">Start with your highest-tolerance users. Let them develop genuine intuition about when the AI is reliable. Their behaviour becomes the social proof that drives adoption among their peers more effectively than any company communication.</p>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:28px 32px;border-left:4px solid var(--blue);">
  <p class="body-md">Before launching any AI feature into an enterprise context, ask: Can users verify why the AI produced this output? Is the override mechanism frictionless? Does this fit the existing workflow? Have we identified our advocate cohort?</p>
</div>`,

  "pilot-to-production-scaling": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">The engineering work required to take an AI system from pilot to production is approximately an order of magnitude more complex than building the pilot itself. The teams that understand this before they start are the ones that ship.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">What the Pilot Doesn't Test</h2>
<p class="body-md" style="margin-bottom:24px;">AI pilots are typically built on clean data, controlled inputs, and a tolerant user base. Production systems face dirty data, adversarial inputs, and impatient users. The most dangerous assumptions carried from pilot to production: that data quality will stay the same (it won't), and that the edge cases caught in testing represent the full space of what users will do (they represent maybe five percent of it).</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Production Readiness Framework</h2>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Monitoring before deployment.</strong> Before you launch, you need to know what "healthy" looks like across all your key metrics. You cannot detect degradation if you don't have a baseline.</p>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Graceful degradation paths.</strong> What happens when the model is unavailable? When it returns a low-confidence output? Design these explicitly.</p>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Feedback collection from day one.</strong> Build explicit feedback mechanisms into the product before launch. The signal quality from real users in real contexts is irreplaceable.</p>
<p class="body-md" style="margin-bottom:32px;"><strong style="color:var(--ink);">Rollback capability within fifteen minutes.</strong> You will need to roll back a model version. Design your deployment process to support this from the beginning.</p>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:28px 32px;border-left:4px solid #DC2626;">
  <p class="body-md">If your production deployment doesn't include a monitoring dashboard, a documented rollback procedure, and a feedback collection mechanism, it is not a production deployment. It is a pilot with more users.</p>
</div>`,

  "ai-ready-organisation": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">Organisations spend enormous amounts of time evaluating AI technology. They spend comparatively little time evaluating whether their organisation is ready to use AI effectively.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">The Three Layers of AI Readiness</h2>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Data readiness</strong> is not about volume. It means having the right data, in the right place, with the right governance — knowing which data is trustworthy and which isn't.</p>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">People readiness</strong> is about capability at every level. At the leadership level: evaluating AI claims critically. At the analyst level: interpreting model outputs without over-trusting or under-trusting them. At the frontline level: knowing when to follow an AI recommendation and when to escalate.</p>
<p class="body-md" style="margin-bottom:24px;"><strong style="color:var(--ink);">Leadership alignment.</strong> AI transformations require decisions that touch data governance, process redesign, and workforce implications. These cannot be made by a technology team. They require senior leadership with both the authority and the commitment to drive change.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">The Diagnostic That Actually Works</h2>
<p class="body-md" style="margin-bottom:16px;">Pick one high-value use case. Then answer these questions in detail:</p>
<ul style="margin:0 0 24px 20px;">
  <li class="body-md" style="margin-bottom:8px;">What data would the AI need, and where does it currently live?</li>
  <li class="body-md" style="margin-bottom:8px;">Who owns that data, and what would it take to access it for AI training?</li>
  <li class="body-md" style="margin-bottom:8px;">What would change in the workflows of the people who would use this system?</li>
  <li class="body-md" style="margin-bottom:8px;">Who has the authority to approve the process changes required for adoption?</li>
  <li class="body-md" style="margin-bottom:8px;">Who is accountable for the business outcome, and what metric defines success?</li>
</ul>
<p class="body-md" style="margin-bottom:32px;">If these questions produce confident, specific answers, you have meaningful AI readiness for that use case. If they produce vague responses, committee referrals, or extended debates about ownership, you know exactly where to start your readiness work.</p>`,

  "hidden-cost-bad-data": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">Every AI project budget we have reviewed underestimates data work. The near-universal assumption is that approximately twenty percent of effort will go to data and eighty percent to modelling. In practice, the ratio tends to be closer to the reverse.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Why Bad Data Is Hard to See</h2>
<p class="body-md" style="margin-bottom:16px;">Data quality problems in AI projects are insidious because they're not immediately visible. A model trained on flawed data doesn't fail with an error message. It trains successfully. It passes evaluation on the test set — which was drawn from the same flawed distribution as the training data. And then, gradually, users start reporting that the outputs don't match their expectations.</p>
<p class="body-md" style="margin-bottom:24px;">By that point, the cost of the data problem is not just the cost of fixing the data. It's the cost of the fix plus model retraining plus re-evaluation plus re-deployment plus, in regulated industries, the compliance review.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">The Costs That Don't Show Up in the Budget</h2>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Retraining costs.</strong> In production AI systems, model retraining triggered by discovered data quality issues typically costs two to three times as much as the initial training run.</p>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Trust debt.</strong> Users who encounter incorrect outputs — particularly early in their experience — calibrate their trust downward and keep it there.</p>
<p class="body-md" style="margin-bottom:32px;"><strong style="color:var(--ink);">Compliance exposure.</strong> In regulated industries, a model trained on improperly governed data may be a regulatory problem, not just a performance one.</p>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:28px 32px;border-left:4px solid var(--teal);">
  <p class="body-md">Projects that invested seriously in data quality assessment before modelling work began completed overall on average thirty-eight percent faster than projects that treated data as a pre-resolved dependency.</p>
</div>`,

  "ai-strategy-executives-fund": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">Most AI strategies fail to get funded — not because the ideas are bad, but because they're written for the wrong audience. What executives actually need to make a funding decision is a clear, credible answer to "what business problem does this solve, and what will it cost us versus what will it return?"</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Start with the Business Problem</h2>
<p class="body-md" style="margin-bottom:16px;">The first page of an AI strategy document that gets funded doesn't mention AI until the third paragraph. It starts by describing a business problem with specificity: not "we want to improve customer service efficiency" but "our support team resolves an average of forty-two tickets per agent per day, at an average handle time of eleven minutes. This gap costs us approximately €3.4 million annually."</p>
<p class="body-md" style="margin-bottom:24px;">From that specific problem, the document proposes AI as the most credible path to closing the gap — with reasoning that a financially literate executive can evaluate and challenge.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">The ROI Conversation</h2>
<p class="body-md" style="margin-bottom:24px;">Present a range, show your work, and be explicit about the key assumptions that drive the range. A well-constructed AI business case presents three scenarios: a conservative case, a base case, and an upside case. Executives who see this structure understand that you've done serious thinking, not wishful modelling.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Handling the Risk Section</h2>
<p class="body-md" style="margin-bottom:24px;">Name the real risks honestly, assess their likelihood and impact with reasonable specificity, and describe the mitigations in concrete operational terms. "Model accuracy risk: mitigated through robust test coverage" is noise. "Model accuracy risk: we will not deploy to full user base until the system achieves 87% precision" is a credible, evaluatable statement.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">The Ask</h2>
<p class="body-md" style="margin-bottom:32px;">End with a specific ask: "We are requesting budget approval for Phase 1, comprising data infrastructure investment of €X, model development of €Y, and a twelve-week implementation timeline, with a go/no-go decision point at week eight." Specific asks are funded. General asks for AI investment are deferred indefinitely.</p>`,

  "llm-integration-patterns": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">Integrating large language models into enterprise software is an architectural challenge as much as a data science one. The patterns that work in a startup demo often break in an enterprise context where latency budgets are strict, data governance is non-negotiable, and the failure cost of a wrong output is measured in money and reputation.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Pattern 1: Prompt-and-Return</h2>
<p class="body-md" style="margin-bottom:24px;">The simplest pattern: send a prompt, get a response, display it. This works well for low-stakes, asynchronous use cases where accuracy variance is tolerable — summarisation, first-draft generation, brainstorming support. It breaks down for high-stakes decisions or compliance-sensitive outputs.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Pattern 2: RAG (The Enterprise Standard)</h2>
<p class="body-md" style="margin-bottom:24px;">Retrieval-Augmented Generation — grounding LLM responses in specific documents retrieved from a managed knowledge base — is the standard pattern for most enterprise AI applications. It addresses hallucination risk, enables source attribution, and allows organisations to control what knowledge the AI operates on without fine-tuning costs.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Pattern 3: AI-in-the-Loop</h2>
<p class="body-md" style="margin-bottom:24px;">For decision support applications, the AI-in-the-loop pattern is more appropriate than a fully automated one. The LLM generates a structured recommendation with supporting reasoning. A human reviews and acts. The action is logged with a timestamp and user ID. This pattern satisfies most regulatory audit requirements and maintains human accountability.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Pattern 4: Agent Orchestration</h2>
<p class="body-md" style="margin-bottom:24px;">Agentic AI systems are the most powerful and the most dangerous pattern in the enterprise toolkit. Enterprise deployment requires: strict tool permissions, explicit human checkpoints for high-impact actions, and comprehensive logging of every tool call and decision made by the agent.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Three Patterns That Fail in Production</h2>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Unconstrained agents with broad tool access.</strong> Impressive in a demo. Catastrophic when the agent decides to solve an unexpected problem using a capability it was never intended to use.</p>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Prompt-and-return for compliance-sensitive outputs.</strong> If an output will influence a regulatory decision, it needs source attribution and human review.</p>
<p class="body-md" style="margin-bottom:32px;"><strong style="color:var(--ink);">Single-model pipelines without fallback.</strong> Any enterprise system with AI in the critical path needs a graceful degradation path.</p>`,

  "ai-change-management": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">No AI implementation has ever failed because the algorithm wasn't good enough. They fail because the people didn't change with it — because the organisation's processes, incentives, culture, and capabilities weren't aligned to support the new way of working that the AI system requires.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Why AI Change Management Is Different</h2>
<p class="body-md" style="margin-bottom:24px;">Conventional software change management is primarily about training and communication: here is the new system, here is how it works. AI systems are not deterministic. Their outputs vary. Their performance drifts. Users need to develop judgment, not just procedural knowledge — they need to learn when to trust the AI and when to be sceptical.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">The Competency Model</h2>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Calibrated trust.</strong> The ability to form accurate beliefs about when an AI system is likely to be right and when it's likely to be wrong.</p>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Effective prompting and task framing.</strong> Getting useful outputs from an AI system is a skill. Users who understand how to frame their queries get dramatically better results.</p>
<p class="body-md" style="margin-bottom:24px;"><strong style="color:var(--ink);">Feedback contribution.</strong> The most valuable users of an AI system are the ones who consistently and accurately signal when outputs are wrong.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Incentive Alignment</h2>
<p class="body-md" style="margin-bottom:32px;">The most consistent reason AI adoption stalls after initial rollout is incentive misalignment. If an employee is evaluated on the speed and volume of their output, and an AI system takes longer to use correctly than doing the task manually, they will not use it.</p>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:28px 32px;border-left:4px solid var(--amber);">
  <p class="body-md">Every Vyuhon implementation engagement includes an adoption planning workstream that runs alongside the technical development, not after it. We work with HR, L&D, and operations teams from week one to identify the competency gaps, the incentive misalignments, and the process changes that AI adoption will require.</p>
</div>`,

  "ux-of-ai-designing-trust": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">Trust in AI systems is not a feature you add at the end. It's an architectural decision made at the beginning — baked into how the system presents its outputs, explains its reasoning, handles uncertainty, and responds to user correction.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">The Trust Architecture</h2>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Competence trust.</strong> Does the user believe the system can do what it claims to do? Built through accurate outputs and appropriate confidence signalling.</p>
<p class="body-md" style="margin-bottom:14px;"><strong style="color:var(--ink);">Integrity trust.</strong> Does the user believe the system is being honest with them? Built through transparency about limitations and failures, not by papering over them.</p>
<p class="body-md" style="margin-bottom:24px;"><strong style="color:var(--ink);">Benevolence trust.</strong> Does the user believe the system is working for them? Systems that frame themselves as decision-makers erode benevolence trust. Systems that frame themselves as thinking partners build it.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Uncertainty as a Design Element</h2>
<p class="body-md" style="margin-bottom:24px;">Most AI interfaces communicate outputs as if they are facts. This is a trust-destroying design pattern. Effective uncertainty communication is about presenting outputs at an appropriate level of commitment. "Based on the documents provided, the deadline appears to be March 15th — please verify with the original contract" is more trustworthy than "The deadline is March 15th" — even when the underlying model confidence is identical.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Designing for Correction</h2>
<p class="body-md" style="margin-bottom:32px;">Design the correction flow to feel like a collaboration, not a complaint. The systems that do this well see higher correction rates — which initially looks like worse performance, but actually reflects higher engagement and generates the feedback data that drives model improvement.</p>`,

  "operational-costs-case-study": `
<p class="body-lg" style="margin-bottom:24px;color:var(--ink-mid);">This is the story of a 2,400-person operations team at a mid-market financial services organisation that went from entirely manual document review processes to AI-augmented workflows in eight months — achieving a 34% reduction in processing costs, a 61% reduction in average handling time, and a 22% improvement in error rates.</p>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:24px 28px;margin:32px 0;">
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;text-align:center;">
    <div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:2rem;font-weight:800;background:linear-gradient(135deg,var(--purple),var(--blue));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">34%</div><div class="body-sm">Reduction in processing costs</div></div>
    <div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:2rem;font-weight:800;background:linear-gradient(135deg,var(--teal),var(--blue));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">61%</div><div class="body-sm">Reduction in handling time</div></div>
    <div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:2rem;font-weight:800;background:linear-gradient(135deg,var(--purple),var(--teal));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">22%</div><div class="body-sm">Improvement in error rates</div></div>
  </div>
</div>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">The Starting Point</h2>
<p class="body-md" style="margin-bottom:24px;">The organisation processed approximately 18,000 documents per month through a team of operations analysts who reviewed each document manually. Average handling time per case was eleven minutes. Error rate on data extraction was approximately 4.2%. Backlog during peak periods regularly exceeded ten working days.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Months 1–3: The Work Nobody Wanted to Do</h2>
<p class="body-md" style="margin-bottom:24px;">The first three months produced no AI models. They produced a data audit covering fourteen years of historical records; an assessment finding three document types were essentially unusable for AI training without remediation; a process mapping exercise revealing seventeen distinct decision pathways; and a change management assessment identifying significant incentive misalignments.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Months 4–6: Building the Right Thing</h2>
<p class="body-md" style="margin-bottom:24px;">The AI system was a document understanding pipeline combined with a decision support interface. The pipeline extracted structured data and surfaced it to analysts alongside the original document, pre-populating fields and flagging potential issues. The analyst reviewed the extraction, corrected anything wrong, and made the case decision. The AI did not make decisions.</p>

<h2 class="display-sm" style="color:var(--ink);margin:40px 0 14px;">Months 7–8: Deployment and Stabilisation</h2>
<p class="body-md" style="margin-bottom:24px;">Deployment followed a staged rollout: ten analysts in week one, forty in week two, full team in week six. The correction data from the first three weeks of production — over 8,000 analyst corrections — was used to retrain the models at week four. Post-retraining accuracy improved by eleven percentage points. By week eight, average handling time had dropped to 4.3 minutes and extraction error rate had fallen to 1.6%.</p>

<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:28px 32px;border-left:4px solid var(--purple);">
  <p class="body-md">The 34% cost reduction headline is real. So is the six months of unsexy groundwork that made it possible. The groundwork isn't a delay to the real project. It is the real project.</p>
</div>`,
};
