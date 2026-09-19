# PS1 Author Response and Revision — v2

**Author:** Xuantong Fu  
**Proposal:** *Trust and Equitable Access in Digital Markets*  
**Reviews:** Peer Review 1 and Peer Review 2  
**Version:** v2, September 2026

## 1. What I will retain and why

I retain the interdisciplinary structure of the proposal. Peer Review 1 explicitly recognized that the project connects platform rules, reputation information, and income uncertainty across economics, computation, and behavioral science. This connection remains central because the project asks a joint question: trust can affect willingness to transact, but platform rules and financial constraints can determine who actually obtains a scarce good.

I also retain the distinction between computational mechanism evidence and empirical behavioral evidence. The simulation uses stylized assumptions and synthetic/model-generated inputs, while the Hugging Face game remains an accessible behavioral prototype rather than population-level evidence. This boundary is important because the current evidence can demonstrate a mechanism inside the model but cannot establish a causal effect in real consumers.

## 2. What I changed or decided to defer and why

Peer Review 1 asked how I would distinguish a reduction in speculation from a reduction in genuine consumer participation. I revised the computational section to define three separate outcomes: genuine access rate, speculation rate, and overall transaction rate. Genuine access rate is the share of genuine consumers who obtain the scarce good; speculation rate is the share of transactions involving speculators; and overall transaction rate is the share of all buyers who obtain the good. This makes it possible to distinguish a change in buyer composition from a general decline in participation.

Peer Review 2 asked for clearer numbers, data, and steps and suggested narrowing the hypothesis. I therefore made the computational claim more testable: holding reputation information and income uncertainty fixed, I compare the transferable/non-refundable rule with the refundable/non-transferable rule. The focused baseline uses 100 buyers, 30 goods, 200 rounds per condition, and random seed 42. The saved output gives 42.38% genuine access, 0% speculation, and 29.63% overall transaction under the refundable rule, versus 1.93%, 95.17%, and 29.95% under the transferable rule.

I defer a stronger causal claim about reputation visibility and a full demand/scarcity factorial experiment. The current notebook contains six reputation/income-uncertainty conditions and a robustness check over speculator shares, but it does not yet implement every proposed demand/scarcity variation described in the broader PS1 framing. I therefore narrow the current computational claim rather than presenting unimplemented treatments as completed evidence.

## 3. How I addressed the questions and checked the revision

I added a focused hypothesis-test section to the notebook, an explicit reproducibility checklist, and saved CSV outputs for the full summary and focused baseline comparison. The focused comparison is based on the existing verified simulation output, so the revision does not invent new empirical evidence. I also updated the paper, Appendix E, and repository documentation so that the same definitions, parameters, and baseline values appear across the artifacts.

The revision changes the evaluation standard from asking only whether a platform produces transactions to asking who receives the scarce opportunities. If transaction rates remain similar while speculative share rises and genuine access falls, the model identifies speculative crowding rather than simply lower participation. The remaining behavioral and real-world causal questions are retained as future work and will require larger human-participant or field data.
