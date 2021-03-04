# Components / Bar Progress

## Bar Progress
O componente da barra de progresso é usado para representar visualmente a conclusão de uma
tarefa ou operação. Mostra quanto da tarefa foi concluída e quanto ainda resta.

![](../_media/images/iconBarProgress.png)

## Exemplo em código da Bar Progress

```css
<div class="row dados-armazenamento">
	<div class="col-xs-12" style="margin-bottom: 40px;">
		<div><span class="dados-subtitle">Arquivos</span></div>
		<div style="display: inline;">
			<span id="file-usage-text" class="dados-content"></span>
			<div class="progress">
				<div class="progress-bar progress-bar-file" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
			<span class="progress-value"></span>
		</div>
	</div>
</div>
```
## Exemplo de utilização no site
![](../_media/images/barProgress.png)