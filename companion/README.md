# PS1 Computational Artifact
## Trust and Equitable Access in Digital Markets

This directory contains the computational artifact for my PS1 research proposal,
"Trust and Equitable Access in Digital Markets."

## Research Question

How do platform rules, reputation information, and income uncertainty jointly
affect trust, speculation, and genuine consumer access to scarce goods?

## Computational Question

How can a simulation compare platform rules and reputation-information conditions
to identify when a platform improves genuine consumer access without increasing
speculative crowding?

## Notebook

The main computational artifact is:

`notebooks/PS1_Trust_Equitable_Access_Simulation.ipynb`

The notebook implements a heterogeneous-agent simulation of scarce-good markets.
It varies platform rules, reputation information, demand/scarcity conditions,
speculative participation, and buyer characteristics.

## Reproducibility

The notebook is designed to be runnable in Google Colab.

### Dependencies

Python packages used by the notebook are listed in:

`requirements.txt`

### How to run

1. Open the Google Colab notebook.
2. Install the listed dependencies if they are not already available.
3. Run the notebook from the first cell to the last cell.
4. The notebook generates the simulation outputs and figures shown in the
   saved notebook.

The computational inputs are synthetic/model-generated rather than an external
human-subject dataset.

## Outputs

The notebook reports the simulation outcomes used in the PS1 proposal, including
measures of genuine consumer access, speculation, transaction outcomes, and
surplus.

The submitted notebook preserves the actual outputs generated during the
final run.

## Relationship to the Hugging Face Game

The computational simulation and the Hugging Face interactive game address the
same broader research question but serve different purposes.

The Hugging Face game is a small human-facing behavioral prototype in which a
buyer makes bidding decisions under No History, Recent History, and Full History.

The Colab simulation extends the computational analysis to heterogeneous buyers,
platform rules, scarcity, demand, and speculative participation.

The game therefore provides an accessible behavioral demonstration, while the
Colab provides a reproducible computational model.

## Evidence Boundary

The simulation uses stylized assumptions and synthetic inputs. Its outputs are
computational results, not evidence of population-level human behavior or
real-world causal effects.

Behavioral and policy conclusions require future testing with human participants
or real platform data.

## Links

Paper:
[[Insert final PS1 PDF or repository link]](https://www.overleaf.com/read/ttmqthtyqsdh#a8d8b5)

Google Colab:
https://colab.research.google.com/drive/193R57-a-d-1RZOn3iszmP1Ya4X1AoBF2#scrollTo=2-20eTle3qXZ

Hugging Face:
https://huggingface.co/spaces/dku-comsci-econ206-2026/Xuantong_Fu_Space

## Submitted Version

Submitted commit:

`[INSERT FINAL COMMIT HASH]`

The submitted commit identifies the exact repository version associated with
the PS1 submission.

## License

Unless otherwise specified by the course or repository owner, this artifact is
provided for academic and educational reuse with attribution.
